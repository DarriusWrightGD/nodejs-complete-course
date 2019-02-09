const commonService = require('./../services/common.service');

const users = [
  {
    id: 0,
    username: "foo-user@email.com"
  }
]

module.exports = {
  async getUsers() {
    const token = await commonService.getToken();
    return Promise.resolve(users);
  },
  getUser(id) {
    return Promise.resolve(users[id]);
  },
  addUser(user) {
    users.push({ ...user, id: users.length })
    return Promise.resolve();
  }
}