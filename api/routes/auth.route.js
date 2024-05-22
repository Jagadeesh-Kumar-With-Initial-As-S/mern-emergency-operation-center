import express from "express";
import {
  google,
  signin,
  signup,
  signup_field,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.post("/signup_field", signup_field);
export default router;
