const Messages = require("../models/messageModel");

module.exports.getMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;

    const messages = await Messages.findOne({
      // users: {
      //   $all: [from, to],
      // },
      // sender: from,
      $or: [{ sender: from }, { sender: to }],
    }).sort({ updatedAt: 1 });

    if (!messages) return res.json({ msg: "No messages found." });

    let projectedMessages = [];
    // if (messages) {
    //   projectedMessages = messages?.messages?.map((msg) => {
    //     return {
    //       fromSelf: msg.from === from.role,
    //       message: msg.message.text,
    //     };
    //   });
    // }

    res.json(messages);
  } catch (error) {
    next(error);
  }
};

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, text, to } = req.body;
    // const data = await Messages.create({
    //   message: {
    //     text: message,
    //     from: from.role,
    //   },
    //   sender: from,
    // });
    const id = from.role === "admin" ? to : from;
    const chat = await Messages.findOne({ sender: id });
    console.log("chat ::: ", chat)
    let data = [];
    if (chat) {
      console.log("1")
      console.log("text ::: ",text)
      chat.messages.push({
        text: text,
        from: from.role,
      });

      console.log("chat.messages : ", chat.messages)
      chat.save();
    } else {
      console.log("2")
      data = await Messages.create({
        messages: [
          {
            text: text,
            from: from.role,
          },
        ],
        sender: from,
      });
    }

    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (error) {
    next(error);
  }
};
