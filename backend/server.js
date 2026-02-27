const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

let otpStore = {};

// Send OTP
app.post("/send-otp", async (req, res) => {
  const { phone } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[phone] = {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
  };

  try {
    const response = await axios.post(
      "https://www.fast2sms.com/dev/bulkV2",
      {
        route: "otp",
        message: `Your OTP is ${otp}`,
        variables_values: otp,
        numbers: phone,
      },
      {
        headers: {
          authorization: process.env.FAST2SMS_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);

    res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

// Verify OTP
app.post("/verify-otp", (req, res) => {
  const { phone, otp } = req.body;

   const storedData = otpStore[phone];
  if (!storedData) {
    return res.status(400).json({ success: false, message: "No OTP found" });
  }
    if (Date.now() > storedData.expiresAt) {  
      delete otpStore[phone];
      return res.status(400).json({ success: false, message: "OTP expired" });
    }
  if (storedData.otp == otp) {
    delete otpStore[phone];
    res.json({ success: true, message: "OTP Verified" });
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));