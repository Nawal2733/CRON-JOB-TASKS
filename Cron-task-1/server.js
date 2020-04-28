const nodeMailer = require('./node-mailer/node-mailer');
const backUp = require('./databaseBackup/backup');
const dataMig = require('./data_migration/data_mig')
const Cron = require('cron').CronJob;


// const Task = new Cron('*/5 * * * * *', () => {
//     backUp()
//     // dataMig()
//     // nodeMailer()

// }, null, true);

