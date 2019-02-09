const healthService = require('./health.service');
module.exports = {
  async get(req, res) {
    const status = await healthService.getStatus(req.query.forceFailure);

    res.send(status)
  }
}