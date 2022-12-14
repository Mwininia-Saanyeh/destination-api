const jwt =require('jsonwebtoken')
const User =require('../models/userSchema')



// is admin middleware

exports.admin=async function(req, res,next) {
    if (req.User && req.User.isAdmin){
        res.status(501).json({
            messsage:"you are not an authorized admin"
        })
    }
}
exports.protect =async function(req, res,next){
    let token;
    if (req.headers.authorization && req.headers.authorizaton.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1];
            const decoded =jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id)
            next();
        }catch (err){
            res.status(400).json({
                message:"invalid token"
            })
        }
    }
    if (!token){
        res.status(400).json({
            message:"you are not authorized"
        })
    }
};