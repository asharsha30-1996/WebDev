const Student = require('../models/Student');

// Add a new student
exports.addStudent = async (req, res) => {
  try {
    const { name } = req.body;
    const newStudent = new Student({ name });
    await newStudent.save();
    res.json(newStudent);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(400).send(error);
  }
};
