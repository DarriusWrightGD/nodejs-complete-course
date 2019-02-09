const { validationResult } = require('express-validator/check');

module.exports = (req, res, next) => {
  let errors = undefined;
  try {
    errors = validationResult(req)
    errors.throw()
    next()
  } catch (e) {
    res.status(400).send({ errors: errors.array() })
  }
}