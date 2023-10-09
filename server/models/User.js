const { createHmac, randomBytes } = require("crypto");
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // User can't sign up twice using same email.
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },

    profileImageUrl: {
      type: String,
      default: "../public/images/user-icon.png",
    },
  },
  { timestamps: true }
);

// hashing the password and creating the salt for the user before saving it using mongoose pre middleware.
userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) return;

  const salt = randomBytes(16).toString();

  const hashPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");
  this.salt = salt;
  this.password = hashPassword;
  next();
});

userSchema.static("matchPassword", async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) throw new Error("Invalid Creadentials");

  const salt = user.salt;
  const hashedPassword = user.password;

  const userProvidedHash = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  if (userProvidedHash !== hashedPassword) {
    throw new Error("Incorrect Password");
  }

  // Remove password and salt fields from the user object
  const userWithoutSensitiveInfo = { ...user.toObject() };
  delete userWithoutSensitiveInfo.password;
  delete userWithoutSensitiveInfo.salt;

  return userWithoutSensitiveInfo;
});

const User = model("user", userSchema);

module.exports = User;
