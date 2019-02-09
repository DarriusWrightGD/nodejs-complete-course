const router = require('express').Router();
const usersController = require('./users.controller');

const { body } = require('express-validator/check');
const assertValidation = require('./../middleware/assertValidation');

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUser);
router.post('/', [body('username').isEmail(), assertValidation], usersController.addUser);

module.exports = router;