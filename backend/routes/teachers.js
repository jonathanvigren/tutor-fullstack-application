import express from "express";
import { getTeacher } from "../controllers/teacher.js";

const router = express.Router()

router.get("/find/", getTeacher)

export default router