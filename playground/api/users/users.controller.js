const usersService = require('./users.service');

module.exports = {
  async getUsers(req, res) {
    const users = await usersService.getUsers();
    res.send(users);
  },
  async getUser(req, res) {
    const { id } = req.params;
    const user = await usersService.getUser(id);
    res.send(user);
  },
  async addUser(req, res) {
    const { username } = req.body;
    await usersService.addUser({ username})
    res.sendStatus(204);
  }
}