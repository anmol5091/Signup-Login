var User = require("../models/UsersModel");
var express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
  res.status(200).json({
    message:"user api get"
  })
})

router.post('/signup',(req,res,next)=>{
      
      var user = new User({
      username : req.body.username,
      password : req.body.password,
      name: req.body.name
    });

      User.find({username: req.body.username}).then(
        async (result) =>
        {
          if(result.length===0)
          {
            const result = await user.save();
            res.status(200).json(result);
          }
          else
          {
            res.status(500).json(result);
          }
        }
      ).catch(err => {res.status(200).json(err)});
  
      
});

router.post('/login',(req,res,next)=>
{  
   User.find({username: req.body.username}).exec()   //pass object as parametr instead of a variable
   .then(user => {
     console.log(user[0].password);
     if(user[0].password === req.body.password)
     {
       res.status(200).json("True")
     }
     else
     {
       res.status(200).json("false")
     }
   }
      
   )
.catch(err => {res.status(500).json(err)}) //err=error
   
   
   

})


router.put('/',(req,res)=>{
  res.status(200).json({
    message:"user api put"
  })
})

module.exports = router;
