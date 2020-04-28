const Cron = require('cron').CronJob;
const redis = require('redis');
const client = redis.createClient();
const mongodb = require('./databases/mongodb');
const { MongodbToMysql } = require('./import-exports/MongodbToMysql');
const { mysqlToMongodb } = require('./import-exports/mysqlToMongodb')

mongodb()


// =========== Execute Cron Job for Mysql to Mongodb ========================
const task = new Cron('*/10 * * * * *', async () => {
    client.get("timeStamp", (err, timeStamp)=> {
        console.log("last TimeStamp", timeStamp)
        mysqlToMongodb(timeStamp)
    });
}, null, true);

// =========== Execute Cron Job for mongodb to mysql data import ========================
// const task = new Cron('* * * * *', () => {
//     client.get('mongoId', (err, timeStamp) => {
//         console.log("last timeStamp : -", timeStamp)
//         MongodbToMysql(timeStamp)
//     });
// }, null, true);
