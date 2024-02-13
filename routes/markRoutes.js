const express = require('express');
const router = express.Router();
const { assignMark, getMarksByStudent } = require('../controllers/markController');

router.post('/assign', assignMark);
router.get('/student/:studentId', getMarksByStudent);

module.exports = router;
