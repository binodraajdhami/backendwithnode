const express = require('express');
const router = express.Router();

router.use('/auth', require('./authRoute'));
router.use('/user', require('./userRoute'));
router.use('/product', require('./productRoute'));

module.exports = router;