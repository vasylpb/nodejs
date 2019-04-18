const express = require('express');
const path = require('path');

const router = express.Router();

const shopContoller = require('../controllers/shop');

router.get('/', shopContoller.getIndex);

router.get('/products', shopContoller.getProducts);

router.get('/products/:productId', shopContoller.getProduct);

router.get('/cart', shopContoller.getCart);

router.post('/cart', shopContoller.postCart);

router.post('/cart-delete-item', shopContoller.postCartDeleteProduct);

router.post('/create-order', shopContoller.postOrder);

router.get('/orders', shopContoller.getOrders);

module.exports = router;
