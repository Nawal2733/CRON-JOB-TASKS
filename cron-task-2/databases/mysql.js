const mysql = require('mysql')
const sqldb = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'task2',
  insecureAuth: true,
})

sqldb.connect((err) => {
  if (err) throw err

  console.log('MySql database connected ......!')

  sqldb.query('CREATE DATABASE IF NOT EXISTS task2', (err, result) => {
    if (err) throw err
    // console.log(`Mysql Database Created........!`)
    const query ='CREATE TABLE IF NOT EXISTS students(id int AUTO_INCREMENT, firstName VARCHAR(50), lastName varchar(20), email VARCHAR(50), timeStamp varchar(20), PRIMARY KEY(id))'
    sqldb.query(query, function (err, result) {
      if (err) throw err
      // console.log(result)
      // console.log("Table created");
    })
  })
})

module.exports = sqldb
