const mongoose = require("mongoose")

const MessageModel = mongoose.Schema({
    Reciever: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    Sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    Chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    }
},
{
    timeStamp : true
})

const Message = mongoose.model("Message",MessageModel);
module.exports = Message;