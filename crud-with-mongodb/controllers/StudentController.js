const  studentModel = require("../models/students");

exports.getAllStudents = async (req, res) => {
  try { 
    const students = await studentModel.find();
    res.json({ data: students, status: "success" });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const student = await studentModel.create(req.body);
    res.json({ data: {prn:student.prn,name:student.name}, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentByPrn = async (req, res) => {
  try {
    const student = await studentModel.find();
    res.json({ data: {prn:student.prn,name:student.name}, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await studentModel.updateOne({prn:req.params.prn}, {$set:{name:req.body.name}});
    res.json({ data: {prn:student.prn,name:student.name}, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await studentModel.deleteOne({prn:req.params.prn});
    res.json({ data: {prn:student.prn,name:student.name}, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
