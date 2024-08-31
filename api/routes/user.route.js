import express from 'express'
import { test, updateUser,deleteUser } from '../controllers/user.controller.js';
import { VerifyToken } from '../utils/VerfiyToken.js';

const router = express.Router();

router.get('/',test);
router.post('/update/:id',VerifyToken,updateUser)
router.delete('/delete/:id',VerifyToken,deleteUser)




export default router;