// console.log(global)

const os = require('os');
const path = require('path');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

// import from other file
const math = require('./math');
console.log(math.add(2, 3));

//or
const { add } = require('./math')
console.log(add(3, 5))


//File System

const fs = require('fs')
// fs.readFile('./files/example.txt', (err, data) => {
//     if(err) throw err;
//     console.log(data.toString())
// })

//or
// const fs = require('fs')
// fs.readFile('./files/example.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

// or the best way

fs.readFile(path.join(__dirname, 'files', 'example.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

//exit on uncaught errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
})

//write file
// fs.writeFile(path.join(__dirname, 'files', 'write.txt'), 'write this text', (err) => {
//     if (err) throw err;
//     console.log('complete writing')
// })

//append file
// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'testing for append', (err) => {
//     if (err) throw err;
//     console.log('complete append')
// })


// fs.writeFile(path.join(__dirname, 'files', 'write.txt'), 'write this text now', (err) => {
//     if (err) throw err;
//     console.log('complete writing')

//     fs.appendFile(path.join(__dirname, 'files', 'test1.txt'), 'appended ', (err) => {
//         if (err) throw err;
//         console.log('complete append')

//         fs.rename(path.join(__dirname, 'files', 'test1.txt'), path.join(__dirname, 'files', 'test.txt'), (err) => {
//             if (err) throw err;
//             console.log('rename complete')
//         })
//     })
// })

// Promises in node js

const fsPromises = require('fs').promises;

const fileOperation = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'example.txt'), 'utf8');
        console.log(data);
        //await fsPromises.unlink(path.join(__dirname, 'files', 'example.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promises.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promises.txt'), '\nthis text will append ');
        await fsPromises.rename(path.join(__dirname, 'files', 'promises.txt'), path.join(__dirname, 'files', 'promisesname.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promisesname.txt'), 'utf8');
        console.log(newData);
    } catch(err) {
        console.log(err)
    }
}

fileOperation();