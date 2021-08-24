const {createLogger, transports, format} = require('winston');

const logger = createLogger({
    transports:[
        new transports.File({
            filename: 'info.log',
            level:'info',
            format: format.combine(format.json())
        })
    ]
})

module.exports = logger;