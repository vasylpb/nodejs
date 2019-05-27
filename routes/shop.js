const express = require('express');
const path = require('path');
const isAuth = require('../middleware/isAuth');

const router = express.Router();

const shopContoller = require('../controllers/shop');

router.get('/', shopContoller.getIndex);

router.get('/products', shopContoller.getProducts);

router.get('/products/:productId', shopContoller.getProduct);

router.get('/cart', isAuth, shopContoller.getCart);

router.post('/cart', isAuth, shopContoller.postCart);

router.post('/cart-delete-item', isAuth, shopContoller.postCartDeleteProduct);

router.post('/create-order', isAuth, shopContoller.postOrder);

router.get('/orders', isAuth, shopContoller.getOrders);

module.exports = router;
