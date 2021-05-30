
const jwt=require('jsonwebtoken');


function generateToken(payload,expiry){
    //Not recommeneded, SECRET Values should be set via ENV
 return   jwt.sign(payload,process.env.SECRET||'test',{expiresIn:expiry});
}

function validateToken(token){
    console.log({token});
    try {
        return jwt.verify(payload,process.env.SECRET||'test');
    } catch (error) {
        console.log({error});
        return ;
    }
 
}

module.exports={
    generateToken,
    validateToken
}
