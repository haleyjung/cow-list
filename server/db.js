require("dotenv").config();
const mysql = require('mysql2');

const db = mysql.createConnection({
  //🔥 DB is not connecting with process.env
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database: process.env.DB_NAME
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cow'
})

db.connect((err) => {
  if (!err) {
    console.log('Database connected!');
  } else {
    console.log('Database failed to connect');
  }
})

db.getCow = (cb) => {
  const query = 'SELECT * FROM cowList';
  db.query(query, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })

}

db.saveCow = (cow, cb) => {
  const query = `INSERT INTO cowList (name, description) VALUES ("${cow.name}", "${cow.description}")`

  db.query(query, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      console.log('New cow saved in DB!');
      cb(null, results);
    }
  })
}

module.exports = db;
