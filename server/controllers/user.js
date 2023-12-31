const mongoose = require("mongoose");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

async function allUsers(req, res) {
  const users = await User.find({});

  const result = users.map((item) => ({
    _id: item._id,
    name: item.name,
    email: item.email,
    isAdmin: item.isAdmin,
    isOwner: item.isOwner,
  }));
  //   console.log(result);
  // return result;
  if (result.length === 0) {
    return res.json({ users: [] });
  }
  return res.json({ users: result });
}

const addOrRemoveAdminPost = async (req, res) => {
  const id = req.params.userId;
  if (!id) {
    return res.status(404).json({ error: "Id Didn't exists!!" });
  }

  const user = await User.findOneAndUpdate({ _id: id })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "No user Found" });
      }
      // console.log(user);
      return user;
    })
    .catch((err) => {
      console.log(err);
    });

  user.isAdmin = !user.isAdmin;
  await user.save();

  return res.json({
    message: `User ${
      user.isAdmin ? "Added as Admin" : "Removed from Admin"
    } Successfully`,
  });
};

async function userDeletePost(req, res) {
  const id = req.params.userId;
  // console.log(req.params);
  if (!id) {
    return res.status(404).json({ error: "Id Didn't exists!!" });
  }
  // console.log(new mongoose.Types.ObjectId(id));
  User.deleteOne({ _id: new mongoose.Types.ObjectId(id) })
    .then(() => {
      console.log("Removed User");
    })
    .catch((err) => {
      console.log(err);
    });
  return res.json({ message: "User Removed Successfully" });
}

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  console.log(user)

  if (user && (await user.matchPassword(password)) && (user.isAdmin === true || user.isOwner === true)) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    // throw new Error("Invalid email or password");
    res.json({ message: "Error occurred!!" });
  }
};

module.exports = { allUsers, addOrRemoveAdminPost, userDeletePost, authUser };
