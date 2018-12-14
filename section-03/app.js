const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('The Request: ', req.url, req.method, req.headers);

  // res.setHeader("Content-Type", "text/html");
  // `
  //   <html>
  //     <head>
  //       <title>My First NodeJS Page</title>
  //     </head>
  //     <body><h1>Hello from my Node.js Server</h1></body>
  //   </html>
  // `.split('\n')
  //   .forEach(line => res.write(line));

  // res.setHeader("Content-Type", "application/json");
  // `
  // {
  //   "key": "value"
  // }
  // `.split('\n')
  //   .forEach(line => res.write(line));

  const { url, method } = req;

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
            <input type="text">
            <button type="submit">
              Submit
            </button>
          </form>
        </body>
      </html>
    `.split('\n')
      .forEach(line => res.write(line));
  } else if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.writeHead(302, {
      'Location': '/',
    })
  }


  res.end();
})

server.listen(3000, () => {
  console.log("Listening on port 3000")
})
