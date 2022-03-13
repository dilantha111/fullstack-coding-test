const express = require('express');
const { getProducts, updateProductStatus } = require('../controllers/productController');

const router = express.Router();

/**
 * Product Routes
 */
router.get('/product', getProducts);
router.put('/product/:id/status', updateProductStatus);

module.exports = router;