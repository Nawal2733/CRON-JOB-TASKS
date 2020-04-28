const sql = require('../databases/mysql');
const User = require('../model/user');
const redis = require('redis');
const client = redis.createClient();

module.exports.MongodbToMysql = async (timeStamp) => {
    const data = await User.find(
        { timeStamp: { $gt: timeStamp } }
    );

    let newData = JSON.stringify(data)
    newData = JSON.parse(newData)
    console.log("New Data Insered : -",newData)
    newData.forEach(item => {
        const query = `insert into users(firstName, lastName, email, timeStamp) values("${item.firstName}", "${item.lastName}", "${item.email}", "${item.timeStamp}")`;
        sql.query(query, (err, result)=> {
            if(err) throw err;
            console.log("Data saved ..!!");
            client.set("mongoId", item.timeStamp);
        })
    })
}