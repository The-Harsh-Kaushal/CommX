const mongoose = require("mongoose");

const ChatModel = mongoose.Schema({
  ChatName: {type: String },
  isGroupChat: {type : Boolean},
  users: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
],
LatestMessage : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
},
GroupAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}
},
{
    timeStamp : true
}
);

const Chat = mongoose.model("Chat",ChatModel);
module.exports = Chat;
