import express from "express";
import { create, getOne, editCourse, deleteCourse, getAllSyllabus, addSyllabus, deleteSyllabus, getSchemes ,getDataByTypeAndSemester } from "../controller/userController.js";

const router = express.Router();

router.post("/create", create);
router.get("/getSchemes", getSchemes);
router.get("/getOne/:id", getOne);
router.put("/editCourse/:id", editCourse);
router.delete("/delete/:modelType/:id", deleteCourse);
router.get("/getAllSyllabus", getAllSyllabus);
router.post("/addSyllabus", addSyllabus);
router.delete("/deleteSyllabus/:semester", deleteSyllabus);
router.get('/api/getDataByTypeAndSemester/:type/:semester', getDataByTypeAndSemester);

export default router;
