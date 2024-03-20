const express   = require('express');
const Routes = express.Router();
const protect = require('../midlleware/auth');
const User = require('../modals/UserModal');
const Chat = require('../modals/ChatModal');
const Message = require('../modals/MessageModal');
const { route } = require('./Auth');

Routes.post('/acesschat',protect, async(req,res)=>{
      const {UserID} = req.body;

      if(!UserID){
        res.status(400).send("enter a valid user id");
      }

      var isChat = await Chat.find({
        isGroupChat: false, 
        $and : [
            {users : {$eleMatch : {$eq: UserID}}},
            {users : {$eleMatch : {$eq: req.user._id}}},
        ],
      }).populate('users','-password')
      .populate('latestMessage');

      isChat = await User.populate(isChat, {
        path: "latestMessage.sender",
        select: "name email",
      });
    
      if (isChat.length > 0) {
        res.send(isChat[0]);
      } else {
        var chatData = {
          chatName: "sender",
          isGroupChat: false,
          users: [req.user._id, userId],
        };
    
        try {
          const createdChat = await Chat.create(chatData);
          const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
            "users",
            "-password"
          );
          res.status(200).json(FullChat);
        } catch (error) {
          res.status(400);
          throw new Error(error.message);
        }
      }
})

Routes.get('/fetchchat',protect , async (req,res)=>{
    try {
        Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
          .populate("users", "-password")
          .populate("groupAdmin", "-password")
          .populate("latestMessage")
          .sort({ updatedAt: -1 })
          .then(async (results) => {
            results = await User.populate(results, {
              path: "latestMessage.sender",
              select: "name email",
            });
            res.status(200).send(results);
          });
      } catch (error) {
        res.status(400);
        throw new Error(error.message);
      }
});

Routes.get('/fetchgroups',protect,async(req,res)=>{
    try {
        const allGroups = await Chat.where("isGroupChat").equals(true);
        res.status(200).send(allGroups);
      } catch (error) {
        res.status(400);
        throw new Error(error.message);
      }
});

Routes.post('/creategroup',protect,async(req,res)=>{
    if (!req.body.users || !req.body.name) {
        return res.status(400).send({ message: "Data is insufficient" });
      }
    
      var users = JSON.parse(req.body.users);
      console.log("chatController/createGroups : ", req);
      users.push(req.user);
    
      try {
        const groupChat = await Chat.create({
          chatName: req.body.name,
          users: users,
          isGroupChat: true,
          groupAdmin: req.user,
        });
    
        const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
          .populate("users", "-password")
          .populate("groupAdmin", "-password");
    
        res.status(200).json(fullGroupChat);
      } catch (error) {
        res.status(400);
        throw new Error(error.message);
      }
});

Routes.put('/groupexit',protect , async(req,res)=>{
    const { chatId, userId } = req.body;

  // check if the requester is admin

  const removed = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!removed) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(removed);
  }
});

module.exports = Routes;