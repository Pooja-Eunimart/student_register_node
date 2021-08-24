const Student = require('../../models/student');
const Teacher = require('../../models/teacher');


var register = (req,res) => {
    var sId=req.body.studentId;
    var sName=req.body.studentName;
    var tId=req.body.teacherId;
    var cName=req.body.courseName;
    Teacher.where({t_id:tId, course_name:cName}).fetch()
        .then(()=>{
            new Student({s_id:sId, s_name:sName, t_id:tId, course_name:cName})
            .save()
                .then(()=>{
                    res.json({message:'success'})
                })
        })
        .catch(err=>{
            res.json({error:err})
        })
}

var update = (req,res)=>{
    var sId=req.body.studentId;
    var course=req.body.courseName;
    var newCourse=req.body.newCourse;

    Student.where({s_id:sId, course_name:course}).fetch()
    .then(student=>{
        console.log(student.toJSON());
        student.save({course_name:newCourse})
            .then(()=>{
                res.json({message:'success'})
            })
    })
    .catch(err=>{res.json({message:err})});
}

const read = (req,res)=>{
    var sId=req.query.studentId;
    Student.where({s_id:sId}).fetchAll()
    .then(student=>{
        res.json(student)
    })
    .catch(err=>{
        res.json({error:err});
    })
}

var deleteStudent = (req,res) => {
    var sId = req.body.studentId;
    var courseName = req.body.courseName;

    Student.where({s_id:sId,course_name:courseName}).fetch()
    .then(student=>{
        student.destroy()
        .then(()=>{
            res.json({message:'success'})
        })
    })
    .catch(err=>{res.json({error:err})})    
}




module.exports = {register,update, deleteStudent, read};