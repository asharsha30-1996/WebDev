const express = require('express');
const router = express.Router();
const { addStudent, getAllStudents } = require('../controllers/studentController');

router.post('/add', addStudent);
router.get('/all', getAllStudents);

module.exports = router;
