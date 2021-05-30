const service=require('../services/auth.serivce');


const authenticate= (req,res,next)=>{

    const {username,password}=req.body;
    
   
    if(!username){
        return next({message:"username required"});
    }

    if(!password){
        return next({message:'no passoword'});
    }

    service.signin(username,password).then(
        s=>{
            console.log(s);
            res.send(s);
        },
        e=>{
            console.log(e);
            res.send(400,{message:e});
        }
    );
}


module.exports={
    authenticate
}