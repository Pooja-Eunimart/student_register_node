var deleteSchema={
    type:'object',
    required:['studentId','courseName'],
    properties:{
        studentId:{type:'number'},
        courseName:{type:'string'},
    }
}

module.exports = deleteSchema;