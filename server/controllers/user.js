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

module.exports = { allUsers, addOrRemoveAdminPost };
