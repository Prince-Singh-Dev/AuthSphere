import jwt from 'jsonwebtoken';

const userAuth = async (req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return res.json({success:false,message:'Unauthorized Access'})
    }
    try{
        const tokenDecode = jwt.verify(token,process.ENV.JWT_SECRET);
        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
        }else{
            return res.json({succees:false,message:'Not Authorized. Login Again'});
        }
        next();
    }catch(error){
        res.json({success:false,message:error.message})
    }
}

export default userAuth;
