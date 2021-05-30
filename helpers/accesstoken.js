
const jwt=require('jsonwebtoken');


function generateToken(payload,expiry){
 return   jwt.sign(payload,process.env.SECRET,{expiresIn:expiry});
}

function validateToken(token){
    console.log({token});
    try {
        return jwt.verify(token,process.env.SECRET);
    } catch (error) {
        console.log({error});
        return ;
    }
 
}

module.exports={
    generateToken,
    validateToken
}
