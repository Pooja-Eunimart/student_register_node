const bookshelf = require('../utils/database');
const Teacher = require('./teacher');

const Student = bookshelf.model('Student',{
    tableName: 'student',
    Student(){
        return this.hasMany("Teacher")
    }

})

module.exports = Student;