const { check, validationResult } = require("express-validator");

const signUpValidationsRules = () => {
  return [
    check("fullName")
      .trim()
      .escape()
      .not()
      .isEmpty()
      .withMessage("Name Field cannot be Empty")
      .bail()
      .isLength({ min: 3 })
      .withMessage("Minimum length of the name should be 3")
      .bail(),
    check("email")
      .trim()
      .isEmail()
      .not()
      .isEmpty()
      .withMessage("Invalid email address!")
      .bail(),
    check(
      "password",
      "Please enter a password at least 8 characters and contain at least one uppercase, one lowercase, and one special character."
    )
      .isLength({ min: 8 })
      .bail()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/),
    // username must be an email
  ];
};

const validateSignUp = (req, res, next) => {
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
  signUpValidationsRules,
  validateSignUp,
};
