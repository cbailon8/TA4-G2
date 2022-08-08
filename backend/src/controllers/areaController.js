const db = require("./database.js");
const areaController = {};

areaController.getTopArea = (req,res)=>{
    db.query("select * from stores order by store_area desc limit 5", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}

module.exports = areaController;