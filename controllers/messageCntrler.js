const db = require("../db/queries.js");
const { link } = require("../routes/indxRouter.js");

const links = [
  { href: "", text: "Home" },
  { href: "/new", text: "New" },
];


async function messageCntrlerHome(req, res){
  const messages = await db.getAllMessages() ;
  console.log(messages);
  
    res.render("messageView",{
      messages: messages,
      links: links
    })
}

function createMessage(req, res){
    res.render("createMessage")
}

async function messageCntrlerValues(req, res){
    const {nombreUser} = req.body;
    const {textUser} = req.body;

    await db.insertMessage(textUser, nombreUser)
    console.log(nombreUser);

    res.redirect("/")
}

async function createNamePost(req, res){
  const {nombreUser} = req.body;
  await db.inserName(nombreUser)
  res.redirect("/");
}


module.exports = {
  messageCntrlerHome,
  messageCntrlerValues,
  createMessage
};