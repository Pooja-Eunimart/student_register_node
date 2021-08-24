const express = require('express');
const teacher = require('./routes/Registration')
const student = require('./routes/Enrollment')
const logger = require('./logger');
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
    logger.info(req.body);
    let oldSend = res.send;
    res.send = function(data){
        console.log(data);
        logger.info(JSON.parse(data),{author:'pooja'});
        oldSend.apply(res,arguments);
    }
    next();
  })
  
app.use('/teacher',teacher);
app.use('/student',student);

app.get('/',(req,res)=>{
    res.json('Welcome')
})

app.listen(5000,()=>{
    console.log('Server running at port 5000!!');
})

