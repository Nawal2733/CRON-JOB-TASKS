const { exec } = require('child_process');
const dataMig = require('../data_migration/data_mig')

const backup = () => {
    exec('mysqldump -u root -ppassword test1 > backupDB/exportDB.sql', (err, result)=> {
        if(err) throw err;
        console.log('Export in exporttest1.sql successFully ..!!', result)
        dataMig()
    })   
}

module.exports = backup;