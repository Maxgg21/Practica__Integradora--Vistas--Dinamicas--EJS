const express = require('express');
const router = express.Router();
const controlador =  require('../controllers/productsController');



/* GET DETALLE DEL PRODUCTO*/
router.get('/', controlador.index);
router.get('/:id', controlador.buscar)



module.exports = router;