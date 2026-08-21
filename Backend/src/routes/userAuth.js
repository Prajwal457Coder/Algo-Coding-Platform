const express = require('express');
const userMiddleware = require('../middleware/usermiddleware')
const adminMiddleware=require('../middleware/adminMiddleware')

const authRouter =  express.Router();
const {register,login,logout,adminRegister,deleteProfile,sendMail,sendOtp,verifyOTP,changePassword}=require('../controllers/userAuthent');


// Register
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout',userMiddleware,logout);
// usrMiddleware se pehle check kiya ki token valid hai ya nahi fir logout feature me
authRouter.post('/admin/register',adminMiddleware,adminRegister)//isse me dusaro ko admin bana sakta hu
//adminMiddleware se verify karna hai ki wo admin hai ya nahi hai
//ham to db me bhi edit karke admin ban sakte hai
//authRouter.get('/getProfile',getProfile);
authRouter.delete('/deleteProfile',userMiddleware,deleteProfile)
// login
// logout
// GetProfile
authRouter.get('/check',userMiddleware,(req,res)=>{
    const reply={
        firstName:req.result.firstName,
        emailId:req.result.emailId,
        _id:req.result._id,
         role:req.result.role,
    }
    res.status(200).json({
        user:reply,
        message:"Valid User"
    })
})
// error hoga to userMiddleware handle karega

authRouter.post('/sendMail',adminMiddleware,sendMail)


authRouter.post("/sendOtp",sendOtp);
authRouter.post("/verifyOtp",verifyOTP);
authRouter.post("/changePassword",changePassword);

module.exports=authRouter
