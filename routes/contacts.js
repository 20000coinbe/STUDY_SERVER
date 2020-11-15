const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("contacts 페이지입니다");
});

router.get('/list', (req, res) => {
    res.send("contacts list 페이지입니다");
});

module.exports = router;