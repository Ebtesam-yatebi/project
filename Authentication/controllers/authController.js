const crypto = require("crypto");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSentToken = (user, req, res) => {
  const token = signToken(user._id);

  user.password = undefined;

  return token;
};

exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  const token = createSentToken(user, req, res);

  res.status(201).json({ data: user, token });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new ApiError("Incorrect email or password.", 401));

  const token = createSentToken(user, req, res);
  res.status(200).json({ data: user, token });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.token) {
    // eslint-disable-next-line prefer-destructuring
    token = req.cookies.token;
  }
  if (!token)
    return next(
      new ApiError("You are not looged in! Please log in to get access.", 401)
    );
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const freshUser = await User.findById(decoded.id);
  if (!freshUser)
    return next(
      new ApiError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  if (freshUser.changedPasswordAfter(decoded.iat))
    return next(
      new ApiError("User recently changed password! Please log in again.", 401)
    );
  req.user = freshUser;
  next();
});
