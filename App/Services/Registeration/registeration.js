const Teacher = require('../../models/teacher');
class Registration{
    static register = async(req,res)=>{
        const tId=req.body.teacherId;
        const tName=req.body.teacherName;
        const courseName=req.body.courseName;
        new Teacher({t_id:tId, t_name:tName, course_name:courseName}).save()
            .then(()=>{
                res.json({message:'success'})
            })
            .catch(err=>{
                res.json({error:err})
            })

    }

    static fetchDetails = (req,res)=>{
        var name=req.query.courseName;
        Teacher.where({course_name:name}).fetchAll()
        .then(teacher=>{
            res.json(teacher)
        })
        .catch(err=>{
            res.json({message:err});
        })
    }
}

module.exports = Registration;