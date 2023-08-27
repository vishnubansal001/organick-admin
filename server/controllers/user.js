const mongoose = require("mongoose");
const User = require("../models/User");

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

module.exports = { allUsers, addOrRemoveAdminPost ,userDeletePost};
