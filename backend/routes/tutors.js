import express from "express";
import { getTutor } from "../controllers/tutor.js";

const router = express.Router()

router.get("/find/", getTutor)

export default router