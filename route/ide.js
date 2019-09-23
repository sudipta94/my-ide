const path = require('path');
const express = require('express');
const ide = require('../controller/ideController');
const router = express.Router();
router.get('/',ide.index);
router.post('/execution',ide.execution);
module.exports = router;