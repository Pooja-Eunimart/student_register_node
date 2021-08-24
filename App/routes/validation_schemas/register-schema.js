var registerSchema = {
    type:'object',
    required: ['studentId','studentName', 'teacherId','courseName'],
    properties:{
        studentId:{type:'number'},
        studentName:{type:'string'},
        teacherId:{type:'number'},
        courseName:{type:'string'}
    }
}

module.exports = registerSchema;