const {Router}=require('express');
const router = Router();

const {getTopVentas} = require ('../controllers/ventasController.js');

router.route('/')
    .get(getTopVentas);

module.exports = router;