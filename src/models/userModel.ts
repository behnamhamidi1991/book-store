import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "لطفاً نام خود را وارد کنید"],
  },
  email: {
    type: String,
    required: [true, "لطفاً ایمیل خود را وارد کنید"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "لطفاً رمز عبور خود را وارد کنید"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTOkenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("user", userSchema);

export default User;
