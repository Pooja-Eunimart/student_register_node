var express = require('express');
var router = express.Router();


var { Validator, ValidationError } = require('express-json-validator-middleware');
var validate = new Validator({allErrors: true}).validate;
const Enrollment = require('../Services/Enrollment/enrollment');
var registerSchema = require('./validation_schemas/register-schema');
var updateSchema = require('./validation_schemas/update-schema');
var deleteSchema = require('./validation_schemas/delete-schema');
var readSchema = require('./validation_schemas/read-schema');

router.post('/register',
     validate({body: registerSchema}),
    (req,res)=>{
        Enrollment.register(req,res)

})


router.put('/update',
    validate({body:updateSchema}),
    (req,res)=>{    
        Enrollment.update(req,res);
})

router.delete('/delete',
    validate({body:deleteSchema}),
    (req,res)=>{

            Enrollment.deleteStudent(req,res);
})


router.get('/read',
    // validate({query:readSchema}),
    (req,res)=>{

            
            Enrollment.read(req,res)
})

router.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
        res.json({success:false, err});
        next();
    }
    else next(err); // pass error on if not a validation error
});

module.exports = router;











