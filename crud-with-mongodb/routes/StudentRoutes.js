const express = require("express");
const {
    getAllStudents,
    createStudent,
    getStudentByPrn,
    updateStudent,
    deleteStudent,
} = require("../controllers/StudentController");

const router = express.Router();

router.route("/").get(getAllStudents).post(createStudent);
router.route("/:id").get(getStudentByPrn).put(updateStudent).delete(deleteStudent);

module.exports = router;
