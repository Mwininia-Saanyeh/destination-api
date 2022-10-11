const {Router} = require("express")
const {addUser, loginUser, getUsers} = require("../controllers/userControllers")

const userrouter= Router();

  userrouter.post('/register', addUser).post('/login', loginUser)
//  userrouter.post('/register', function(req, res){
//     addUser
//   });

userrouter.get('/',getUsers)

module.exports=userrouter
