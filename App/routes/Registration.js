var express = require('express');
const router = express.Router();
const {Validator, ValidationError} = require('express-json-validator-middleware');
const validate = new Validator({allErrors:true}).validate;
const teacherReadSchema = require('./validation_schemas/teacher-read-schema');
var teacherRegisterSchema = require('./validation_schemas/teacher-register-schema');
const Registration = require('../Services/Registeration/registeration');



router.post('/register',
    validate({body:teacherRegisterSchema}),
    (req,res)=>{
        Registration.register(req,res)

})

router.get('/fetch',
    // validate({body:teacherReadSchema}),
    (req,res)=>{
        Registration.fetchDetails(req,res)
})

router.use((err,req,res,next)=>{
  if(err instanceof ValidationError){
    res.json({err});
    next();
  }
  else{
    next(err);
  }
})

module.exports=router;