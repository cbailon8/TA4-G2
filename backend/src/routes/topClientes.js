const {Router}=require('express');
const router = Router();

const {getTopClientes} = require ('../controllers/clientesController.js');

router.route('/')
    .get(getTopClientes);

module.exports = router;