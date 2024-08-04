import express from 'express'
import { signin, signup } from '../controllers/auth.controller.js';
import cookieParser from 'cookie-parser';
import { configDotenv } from "dotenv";

const router = express.Router();


router.post('/signup',signup);
router.post('/signin',signin);

export default router;