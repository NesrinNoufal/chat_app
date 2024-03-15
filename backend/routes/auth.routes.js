import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();


router.post("/signup", signup)
// router.get("/signup",signup)

router.post("/login", login)

// router.get("/login", (req, res) => {
//     res.send("Login Route");
// });

router.post("/logout", logout)

export default router;

