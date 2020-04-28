const { exec } = require('child_process');
const nodeMailer = require('../node-mailer/node-mailer')

const dataMig = () => {
    // exec('mysqldump -u root -ppassword test1 > backupDB/exportDB.sql', (err, result)=> {
    //     if(err) throw err;
    //     console.log('Export in exporttest1.sql successFully ..!!', result)
        exec('mysql -u root -ppassword test < backupDB/exportDB.sql', (err, data) => {
            if(err) throw err;
            console.log("successfully import ..!!", data)
            nodeMailer()
        });
    // });
    
}

module.exports = dataMig;