const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
//or
// const { v4 } = require('uuid');
//or
// const uuid= require('uuid');
// uuid.v4()
//
const fsPromises = require('fs').promises;
console.log();
console.log(uuid())

const logEvents = async(message) => {
    const dateTime = `${format(new Date(), 'yyymmdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}`
    console.log(logItem)
    try {
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventlog.txt'), logItem);
    }catch(err) {
        console.log(err)
    }
}
module.exports = logEvents;