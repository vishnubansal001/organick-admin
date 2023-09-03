const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isOwner: {
    type: Boolean,
    default: false,
  },
  // cart: {
  //   items: [
  //     {
  //       productId: {
  //         type: Schema.Types.ObjectId,
  //         ref: "Product",
  //         required: true,
  //       },
  //       quantity: { type: Number, required: true },
  //     },
  //   ],
  // },
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     return next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = bcrypt.hash(this.password, salt);
//   next();
// });

const User = mongoose.model('User', UserSchema);

module.exports = User;
