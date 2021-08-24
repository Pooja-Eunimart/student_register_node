var updateSchema = {
    type:'object',
    required:['studentId','courseName','newCourse'],
    properties:{
        studentId:{type:'number'},
        courseName:{type:'string'},
        newCourse:{type:'string'}
    }
}

module.exports = updateSchema;