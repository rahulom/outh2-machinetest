
const {generateToken}=require('../../../helpers/accesstoken');

const username='admin';
const passoword='admin123';

const signin=(user,pwd)=>{

    // Probably check the username and passord from backend
    //  Encypt the password with hash value
    return new Promise((res,rej)=>{

        if(username===user&&passoword===pwd){
        
            const accessToken= generateToken({username},'1h'); 
            const reniewToken= generateToken({username},'30d');
            res ({accessToken,reniewToken});
        } else {
            console.log('here2');
            rej('invaid_username_or_password');
        }


    })
  



};

module.exports={
    signin
}