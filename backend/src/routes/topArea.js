const {Router}=require('express');
const router = Router();

const {getTopArea} = require ('../controllers/areaController.js');

router.route('/')
    .get(getTopArea);

module.exports = router;