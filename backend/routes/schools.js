import express from "express";
import { searchSchools } from "../controllers/schoolsController.js";

const router = express.Router();

router.get("/search", searchSchools);

export default router;