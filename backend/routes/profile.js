import express from "express";
import { getProfile } from "../controllers/profile.js";

const router = express.Router()

router.get("/find/:profileId", getProfile)

export default router