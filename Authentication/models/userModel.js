const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User must have a name"],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "User must have an email"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "User must have a password"],
      minlength: 8,
      // select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please Confirm your password"],
      validate: {
        validator: function (val) {
          return val === this.password;
        },
        message: "Passwords are not the same",
      },
    },
  },
  { timestamps: true }
);

// Methods
userSchema.methods.correctPassword = function (
  candidatePassword,
  userPassword
) {
  return bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.createPasswordResetOTP = function () {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  this.passwordResetOTP = crypto.createHash("sha256").update(otp).digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return otp;
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

// Document middlewares
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
