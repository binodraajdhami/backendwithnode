const express = require('express');
const router = express.Router();

router.route('/')
    .get(function (req, res, next) {
        res.json({
            products: "Product List"
        });
    })

module.exports = router;