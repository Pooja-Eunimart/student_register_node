var registerSchema = {
    type:'object',
    required:['teacherId','teacherName','courseName'],
    properties:{
        teacherId:{type:'number'},
        teacherName:{type:'string'},
        courseName:{type:'string'}

    }
}

module.exports = registerSchema;