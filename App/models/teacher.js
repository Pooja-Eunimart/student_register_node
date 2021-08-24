const bookshelf = require('../utils/database');

const Teacher = bookshelf.model('Teacher',{
    tableName: 'teacher',
    Teacher(){
        return this.hasMany("Student")
    }
});

module.exports = Teacher;


