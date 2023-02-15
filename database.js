const { createConnection } = require("mysql2");

const connection = new createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "rootuser",
  database: "mydb",
});

connection.connect();

connection.query(`SELECT * FROM users`, (error, result) => {
  if (!error) {
    console.log(result);
  } else {
    console.log(error);
  }
  connection.end();
});
