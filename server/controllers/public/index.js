import express from "express";
import config from "config";
import bcrypt from "bcrypt";
import masjidModel from "../../Models/Masjid/Masjid.js";
import sendSms from "../../utils/sendSms.js";
import sendMail from "../../utils/sendEmail.js";

const router = express.Router();
const URL = config.get("SERVER_URL");
const JWT_SECRET = config.get("JWT_SECRET");

router.post("/register", async (req, res) => {
  try {
    const { fullName, email, password, phone } = req.body;
    console.log(fullName,email,password,phone);
    const emailFind = await userModel.findOne({ email });
    if (emailFind) {
      return res.status(400).json({ msg: "mail already exists" });
    }
    let hashPass = await bcrypt.hash(password, 10);
    const emailToken = Math.random().toString(36).substring(2);
    const phoneToken = Math.random().toString(36).substring(2);
    console.log(emailToken, phoneToken);










  } catch (error) {}
});
