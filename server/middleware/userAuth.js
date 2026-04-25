import jwt from 'jsonwebtoken';

const userAuth = async (req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return res.json({success:false,message:'Unauthorized Access'})
    }
    try{
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);
        if(tokenDecode.id){
            // Safe for both GET and POST
            if (!req.body) req.body = {};
            req.body.userId = tokenDecode.id;

            // Also added this (new standard way)
            req.userId = tokenDecode.id;
        }else{
            return res.json({success:false,message:'Not Authorized. Login Again'});
        }
        next();
    }catch(error){
        res.json({success:false,message:error.message})
    }
}

export default userAuth;
