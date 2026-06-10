const express = require('express')
const messagesRouter = express.Router();
const messageCntrler= require("../controllers/messageCntrler.js")
const createMessage = require("../controllers/createMessageCntrler.js")
const messageValues = require("../controllers/messageCntrlerValues.js")



messagesRouter.get("/", messageCntrler.messageCntrlerHome);
messagesRouter.get("/new", messageCntrler.createMessage);
messagesRouter.post("/new", messageCntrler.messageCntrlerValues);


module.exports = messagesRouter