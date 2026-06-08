const messages = require('../db.js')

const links = [
  { href: "", text: "Home" },
  { href: "/new", text: "New" },
];


function messageCntrlerHome(req, res){
    res.render("messageView", {messages: messages, links: links} )
}

module.exports = messageCntrlerHome;