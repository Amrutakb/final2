import express from "express";
import { getSchemeBySemester, addCourse, editCourse, deleteCourse } from "../controller/controller.js";

const router = express.Router();

// Route to get the entire scheme for a given semester
router.get("/getSchemeBySemester", getSchemeBySemester);

// Route to add a new course to an existing semester
router.post("/addCourse/:semesterNumber", addCourse);

// Route to edit a course in a semester
router.put("/editCourse/:semesterNumber/:courseCode", editCourse);

// Route to delete a course in a semester
router.delete("/deleteCourse/:semesterNumber/:courseCode", deleteCourse);

export default router;
