const express = require('express')
const messagesRouter = express.Router();
const messageCntrler= require("../controllers/messageCntrler.js")
const createMessage = require("../controllers/createMessageCntrler.js")
const messageValues = require("../controllers/messageCntrlerValues.js")



messagesRouter.get("/", messageCntrler);
messagesRouter.get("/new", createMessage);
messagesRouter.post("/new", messageValues )


module.exports = messagesRouter