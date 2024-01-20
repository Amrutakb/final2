import express from "express";
import { getSchemeBySemester, addCourse, editCourse, deleteCourse ,getSyllabusBySemester,editSyllabus } from "../controller/controller.js";

const router = express.Router();

// Route to get the entire scheme for a given semester
router.get("/getSchemeBySemester", getSchemeBySemester);

// Route to add a new course to an existing semester
router.post("/addCourse/:semesterNumber", addCourse);

// Route to edit a course in a semester
router.put("/editCourse/:semesterNumber/:courseCode", editCourse);

// Route to delete a course in a semester
router.delete("/deleteCourse/:semesterNumber/:courseCode", deleteCourse);

router.get("/getSyllabusBySemester", getSyllabusBySemester);
router.put("/editSyllabus/:semesterNumber/:courseCode", editSyllabus);

export default router;
