const { check, validationResult } = require("express-validator");

const loginValidationsRules = () => {
  return [
    check("email")
      .trim()
      .isEmail()
      .not()
      .isEmpty()
      .withMessage("Invalid email address!")
      .bail(),
    check("password", "Please enter a Valid Password")
      .isLength({ min: 8 })
      .bail()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/),
  ];
};

const validateLogin = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.path]: err.msg }));

  // Sending Errors in json with 422: unprocessable identity request
  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  validateLogin,
  loginValidationsRules,
};
