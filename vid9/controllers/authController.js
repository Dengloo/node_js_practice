const usersDB = {
 users: require('../model/users.json'),
 setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt');

const handleLogin = async (req,res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required' });
  const foundUser = userDB.user.find(person => person.username === user);
  if (!user) return res.status(401);

  const match = await bcrypt.compare(pwd,foundUser.password);
  if (match) {
    res.json({ 'success': `User ${user} is logged in!`});
  } else {
    res.sendStatus(401);
  }
}

module.exports = { handleLogin };
