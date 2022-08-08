const db = require("./database.js");
const ventasController = {};

ventasController.getTopVentas = (req,res)=>{
    db.query("select * from stores order by store_sales desc limit 20", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}

module.exports = ventasController;