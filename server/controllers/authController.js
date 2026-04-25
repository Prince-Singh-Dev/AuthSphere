import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import transporter from "../config/nodemailer.js";

// User registration Controller
export const register = async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.json({success:false,message:'Missing Details'})
    }
    try{
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.json({success:false,message:'User Already Exists'});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new userModel({name,email,password:hashedPassword})
        await user.save();
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        res.cookie('token',token ,{
            httpOnly:true,
            secure:process.env.NODE_ENV === 'production',
            sameSite:process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge:7*24*60*60*1000
        });

        // Sending welcome Email
        const mailOptions = {
            from : process.env.SENDER_EMAIL,
            to : email,
            subject : "Welcome to AuthSphere",
            text : `Hello ${name},\n\nWelcome to AuthSphere! We're excited to have you on board. If you have any questions or need assistance, feel free to reach out.\n\nBest Regards,\nAuthSphere Team`
        }
        await transporter.sendMail(mailOptions);
        
        return res.json({success:true});
    }catch(error){
        res.json({success:false,message:error.message})
    }
}

// userLogin Controller
export const login = async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.json({success:false,message:'Email and Password are required'})
    }
    try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:'Invalid Email or Password'})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:'Invalid Password'})
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        res.cookie('token',token ,{
            httpOnly:true,
            secure:process.env.NODE_ENV === 'production',
            sameSite:process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge:7*24*60*60*1000
        });
        return res.json({success:true});
    }catch(error){
        return res.json({success:false,message:error.message});
    }
}

// userLogout Controller 
export const logout = async (req,res)=>{
    try{
        res.clearCookie('token',{
            httpOnly:true,
            secure:process.env.NODE_ENV === 'production',
            sameSite:process.env.NODE_ENV === 'production' ?
            'none' : 'strict',
        })
        return res.json({success:true,message:'Logged Out Successfully'})
    }catch(error){
        return res.json({success:false,message:error.message});
    }
}

// Send Verifcation OTP Controller
export const sendVerifyOtp = async (req,res)=>{
    try{
        const {userID}=req.body;
        const user = await userModel.findById(userId);
        if(user.isAccountVerified){
            return res.json({success:false,message:"Account Already Verified"})
        }
        const otp = String(Math.floor(100000+Math.random()*900000));
        user.verifyOtp = otp;
        user.verifyOtpExpiry = Date.now() + 10*60*1000;
        await user.save();
        const mailOptions = {
            from : process.env.SENDER_EMAIL,
            to : user.email,
            subject : "Account Verification OTP",
            text : `Your OTP is ${otp}. Verify your account using this OTP. It is valid for 10 minutes.`
        }
        await transporter.sendMail(mailOptions);
        return res.json({success:true,message:"Verification OTP sent to Email"})
    }catch(error){
        res.json({success:false,message:error.message});
    }
}