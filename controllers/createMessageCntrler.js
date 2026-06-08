const db = require('../db.js')



function createMessage(req, res){
    res.render("createMessage")
}

module.exports = createMessage;