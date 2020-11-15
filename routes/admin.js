const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("관리자 페이지입니다");
});

router.get('/products', (req, res) => {
    res.send("관리자 products 페이지입니다");
});

module.exports = router;