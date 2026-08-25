const redisClient = require("../config/redis");
const User =  require("../models/user")
const validate = require('../utils/validator');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const cookieParser=require('cookie-parser')
const Submission= require('../models/submission')
const nodemailer=require('nodemailer')
require('dotenv').config();

// const register = async (req,res)=>{
    
//     try{
//         // validate the data;
//         // if(req.result.role!='admin')
//         // throw new Error("Invalid Credential")
//        validate(req.body); 
//       const {firstName, emailId, password}  = req.body;
//       req.body.password = await bcrypt.hash(password, 10);
//       req.body.role='user' //ab koi bhi aaye as a user hi aayega register path se

    
    
//      const user =  await User.create(req.body);
//      const token =  jwt.sign({_id:user._id , emailId:emailId,role:'user'},process.env.JWT_KEY,{expiresIn: "2d"});
//       const reply= {
//             firstName:user.firstName,
//             emailId:user.emailId,
//             _id:user.id,
//             role:user.role
//         }

//      res.cookie('token',token,{maxAge:  2 * 24 * 60 * 60 * 1000});
// // res.cookie("token", token, {
// //    httpOnly: true,
// //    secure: false,
// //    sameSite: "none",
// //    path: "/",
// //    maxAge: 60 * 60 * 1000
// // });
//      //res.status(201).send("User Registered Successfully");
//      res.status(201).json({
//             user:reply,
//             message:"User Registered Successfully"
//         })
//     }
//     catch(err){
//         res.status(400).send("Error: "+err.message);
//     }
// }


// const login = async (req,res)=>{

//     try{
//         const {emailId, password} = req.body;

//         if(!emailId)
//             throw new Error("Invalid Credentials");
//         if(!password)
//             throw new Error("Invalid Credentials");

//         const user = await User.findOne({emailId});

//         const match = await bcrypt.compare(password,user.password);

//         if(!match)
//             throw new Error("Invalid Credentials");

//         const reply= {
//             firstName:user.firstName,
//             emailId:user.emailId,
//             _id:user.id,
//             role:user.role,
//         }

//         const token =  jwt.sign({_id:user._id , emailId:emailId, role:user.role},process.env.JWT_KEY,{expiresIn: "2d"});
//         res.cookie('token',token,{maxAge:  2 * 24 * 60 * 60 * 1000});
// //         res.cookie("token", token, {
// //    httpOnly: true,
// //    secure: false,
// //    sameSite: "none",
// //    path: "/",
// //    maxAge: 60 * 60 * 1000
// // });
//         //res.status(200).send("Logged In Succeessfully");
//         res.status(200).json({
//             user:reply,
//             message:"Loggin Successfully"
//         })
//     }
//     catch(err){
//     res.status(401).json({ message: err.message });
// }
// }


// logOut feature


const register = async (req, res) => {
  try {
    validate(req.body);
    const { firstName, emailId, password } = req.body;

    const existingUser = await User.findOne({ emailId });
    if (existingUser) {
      throw new Error("An account with this email already exists. Please login instead.");
    }

    req.body.password = await bcrypt.hash(password, 10);
    req.body.role = 'user';

    const user = await User.create(req.body);
    const token = jwt.sign(
      { _id: user._id, emailId: emailId, role: 'user' },
      process.env.JWT_KEY,
      { expiresIn: "2d" }
    );
    const reply = {
      firstName: user.firstName,
      emailId: user.emailId,
      _id: user.id,
      role: user.role
    };

    res.cookie('token', token, { maxAge: 7 * 24 * 60 * 60 * 1000 });
    res.status(201).json({ user: reply, message: "User Registered Successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });   // ← JSON, not .send()
  }
};


const login = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    if (!emailId)
      throw new Error("Invalid Credentials");
    if (!password)
      throw new Error("Invalid Credentials");

    const user = await User.findOne({ emailId });

    if (!user)
      throw new Error("Invalid Credentials Please check your email or password");   // don't reveal whether email exists

    const match = await bcrypt.compare(password, user.password);

    if (!match)
      throw new Error("Invalid Credentials");

    const reply = {
      firstName: user.firstName,
      emailId: user.emailId,
      _id: user.id,
      role: user.role,
    };

    const token = jwt.sign(
      { _id: user._id, emailId: emailId, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: "2d" }
    );

    res.cookie('token', token, { maxAge: 7 * 24 * 60 * 60 * 1000 });

    res.status(200).json({
      user: reply,
      message: "Loggin Successfully"
    });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};



const logout = async(req,res)=>{

    try{
        // token valid nahi hai to logout hi hai  ek middleware hi bana dete hai
        // token add kar dunga redis ke blocklist me 
        // Cookies ko clear kar dena...
        const {token}=req.cookies;

        const payload=jwt.decode(token)

        await redisClient.set(`token:${token}`,'Blocked')
        await redisClient.expireAt(`token:${token}`,payload.exp)

        res.cookie("token",null,{expires: new Date(Date.now())});
        res.send("Logged Out Succesfully")

       
    }
    catch(err){
        res.status(503).send("Error "+err.message)


    }
}

const adminRegister =async(req,res)=>{

      try{
        // validate the data;
       validate(req.body); 
      const {firstName, emailId, password}  = req.body;
      req.body.password = await bcrypt.hash(password, 10);
    //   req.body.role='admin' 
    //admin ab dono ka role define kar sakta hai user.role in postman mention the role
    // kuch nahi bhejta hai to user hi banega
    
    
     const user =  await User.create(req.body);
     const token =  jwt.sign({_id:user._id , emailId:emailId,role:user.role},process.env.JWT_KEY,{expiresIn: 60*60});
     res.cookie('token',token,{maxAge: 60*60*1000});
     res.status(201).send("User Registered Successfully");
    }
    catch(err){
        res.status(400).send("Error: "+err);
    }

}

const deleteProfile = async(req,res)=>{
  
    try{
       const userId = req.result._id;
      
    // userSchema delete
    await User.findByIdAndDelete(userId);

    // Submission se bhi delete karo...
    
    // await Submission.deleteMany({userId}); // bahot sare ko delete marana hai hence deleteMayn
    // jaha jaha pe ye userId present hai wo sab delete ho jayege another method see in user.js model
    res.status(200).send("Deleted Successfully");

    }
    catch(err){
      
        res.status(500).send("Internal Server Error");
    }
}
// for simple text
// const sendMail= async(req,res)=>{
//     try{
//    let { receiver } = req.body;
//    let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASSWORD,
//     }
// });

// const mailOption = {
//     from: process.env.EMAIL,
//     to:receiver,
//     subject:"Welcome Email",
//     text:`Welcome to our website hope you are well ${receiver}`
// }

// let mailSend = await transporter.sendMail(mailOption);

// return res.status(200).json({
//     message: "Message Sent Successfully"
// });
       
//     }
//     catch(err){
      
//         res.status(500).json({err:err.message});
//     }

// }

// send attractive html 
// const sendMail= async(req,res)=>{
//     try{
//    let { receiver } = req.body;
//    let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASSWORD,
//     }
// });
// let link= "www.google.com";
// const mailOption = {
//     from: process.env.EMAIL,
//     to:receiver,
//     subject:"Welcome Email",
//     html: `
//     <div style="max-width:600px;margin:auto;padding:20px;font-family:sans-serif">
//         <h2 style="color:#333;">Welcome 🎉</h2>
//         <p>We're excited to have you on board.</p>

//         <a href="${link}" style="
//             display:inline-block;
//             padding:10px 20px;
//             background:#007BFF;
//             color:#fff;
//             text-decoration:none;
//             border-radius:5px;
//         ">
//             Verify Email
//         </a>
//     </div>
// `
// }

// let mailSend = await transporter.sendMail(mailOption);

// return res.status(200).json({
//     message: "Message Sent Successfully"
// });
       
//     }
//     catch(err){
      
//         res.status(500).json({err:err.message});
//     }

// }

// Add attchment
const sendMail= async(req,res)=>{
    try{
   let { receiver } = req.body;
   let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    }
});

const mailOption = {
    // from: process.env.EMAIL,
    from: `"Algo Coding Platform" <${process.env.EMAIL}>`,
    to:receiver,
    subject:"Welcome Email",
    text:`Welcome to our website hope you are well ${receiver}`,
    // attachments:[
    //     {
    //         filename:"Prajwal_kumbhare_Resume_AiML.pdf",
    //         path: "./assets/Prajwal_kumbhare_Resume_AiML.pdf"
    //     }
    // ]
}

let mailSend = await transporter.sendMail(mailOption);

return res.status(200).json({
    message: "Message Sent Successfully"
});
       
    }
    catch(err){
      
        res.status(500).json({err:err.message});
    }

}


  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    }
});

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendOtp = async (req, res) => {
    try {
        const { emailId } = req.body;
        const user = await User.findOne({ emailId: emailId });

        if (!user) {
            return res.status(404).json({
                message: "User doesn't exist",
                status: "failure",
            });
        }

        let otp = generateOTP();
        user.resetOtp = otp;
        user.otpExpiry = Date.now() + 5 * 60 * 1000; // 5 min expiry

        await user.save();

        const mailOption = {
            from: `"Algo Coding Platform" <${process.env.EMAIL}>`,
            to: emailId,
            subject: "Otp for password reset.",
            text: `Your OTP for password reset is ${otp}`,
        };

        await transporter.sendMail(mailOption);

      res.status(200).json({
      message: "OTP has been sent to your email."
    });

    }
    catch(error){
     res.status(500).json({error:error.message})
    }
}



const verifyOTP = async (req, res) => {
    try {
        const { emailId, otp } = req.body;
        
        const user = await User.findOne({ emailId });
       
        if (!user || user.resetOtp !== otp) {
            return res.status(400).json({ msg: "Invalid OTP" });
        }

        if (user.otpExpiry < Date.now()) {
            return res.status(400).json({ msg: "OTP expired" });
        }

        res.status(200).json({ msg: "OTP verified" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const changePassword = async (req, res) => {
    try {
        const { emailId, otp, newPassword } = req.body;

        const user = await User.findOne({ emailId });

        if (!user || user.resetOtp !== otp) {
            return res.status(400).json({ msg: "Invalid OTP" });
        }

        if (user.otpExpiry < Date.now()) {
            return res.status(400).json({ msg: "OTP expired" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        user.resetOtp = null;
        user.otpExpiry = null;

        await user.save();

        return res.status(200).json({
        msg: "Password reset successful"
        });

    } catch (error) {
        console.error("changePassword error:", error); 
        res.status(500).json({ error: error.message });
    }
};

module.exports={register,login,logout,adminRegister,deleteProfile,sendMail,sendOtp,verifyOTP,changePassword}

