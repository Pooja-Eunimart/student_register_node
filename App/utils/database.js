
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'pooja',
        database: 'student_register',
        charset: 'utf8'
    }
});

bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;