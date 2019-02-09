const fs = require('fs')

module.exports = {
  handler: (req, res) => {
    const { url, method } = req;

    console.log(url)
    if (url === '/') {
      res.setHeader("Content-Type", "text/html");
      `
      <html>
        <head>
          <title>My First NodeJS Page</title>
        </head>
        <body>
          <h1>Hello from my Node.js Server</h1>
          <form action="/message" method="POST">
            <input type="text" name="message">
            <button type="submit">
              Submit
            </button>
          </form>
        </body>
      </html>
    `.split('\n')
        .forEach(line => res.write(line));

      res.end();
    } else if (url === '/message' && method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
        console.log('The chunk', chunk)
        body.push(chunk)
      })

      req.on('end', () => {
        console.log('The body', body)
        const message = decodeURIComponent(Buffer.concat(body).toString().split('=')[1])

        console.log('message', message);
        fs.writeFile('message.txt', message, () => {
          console.log(`Wrote ${message} to the file`);
          res.writeHead(302, { 'Location': '/' });
          res.end();
        });
      })
    }
  }
}