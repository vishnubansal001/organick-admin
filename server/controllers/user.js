const User = require('../models/User');

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

module.exports = { allUsers };
