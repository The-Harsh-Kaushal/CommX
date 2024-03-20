const express   = require('express');
const Routes = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../modals/UserModal');
const JWT_SECRET = process.env.JWT_SECRET;
const protect = require('../midlleware/auth');
Routes.post('/signup', async(req,res)=>{
   
  try{
    let AUser= await User.findOne({email: req.body.email});
    if(AUser){
        return res.status(409).json({ error: "Sorry a user with this email already exists" })
    }
    let SameUserName = await User.findOne({name: req.body.name});
    if(SameUserName){
        return res.status(408).json({ error: "Sorry a user with this UserName already exists" })
    }
    // encrypting password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    let user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      // gen auth token
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.status(200).json({
         id : user.id , 
         name : user.name, 
         email  : user.email, 
         AuthToken : authtoken
      })
    }

  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error" );
  }
});

Routes.post('/login',async(req,res)=>{
  let Login_status = false;
  const {email , password} = req.body;
  try{
  if(!email || !password){
   return  res.status(399).json({Login_status, error: "Enter all the required fields"});
  }
  const user =  await User.findOne( { email : email});
  if(!user){
   return  res.status(400).json({Login_status, error: "No such User exsists"});
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    return res.status(410).json({ Login_status, error: "Please try to login with correct credentials" });
  }

  const data = {
    user: {
      id: user.id
    }
  }
  const authtoken = jwt.sign(data, JWT_SECRET);
  Login_status = true;
   return res.status(200).json({ Login_status, authtoken })}
  catch(error)
    {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  

})

Routes.post('/fetchAllUser',protect,async(req,res)=>{
  try
    { const UserId = req.user.id;
     const users = await  User.find({_id: {$ne : UserId}}).select("-password");
     return res.json(users);}
     catch(error){
      console.log(error);
      return res.status(400).json("SERVER SIDE ERROR");
     }
     res.json(req.user);
})


module.exports = Routes;