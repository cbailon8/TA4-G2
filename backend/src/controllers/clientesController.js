const db = require("./database.js");
const clientesController = {};

clientesController.getTopClientes = (req,res)=>{
    db.query("select * from stores order by daily_customer_count desc limit 10", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}

module.exports = clientesController;