const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.productos);
router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);

router.get('/detalle', customerController.detalle);

router.get('/detallea', customerController.detalle);
router.get('/detalleb', customerController.detalle);
router.get('/detallec', customerController.detalle);
router.get('/detalled', customerController.detalle);
router.get('/detallee', customerController.detalle);

router.get('/list', customerController.compras);

module.exports = router;

