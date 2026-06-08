const db = require("../db.js")

function messageCntrlerValues(req, res){
    const nombreUser = req.body.nombreUser;
    const textUser = req.body.textUser;

    console.log(nombreUser)

    db.push({ text: textUser, user: nombreUser, added: new Date() });

    res.redirect("/")
}

module.exports= messageCntrlerValues;