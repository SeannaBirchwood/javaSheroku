const pg = require("pg");
const settings = require("./settings"); // settings.json
const knex = require("knex");

const client = new knex.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

console.log("Searching...")

let inputName = process.argv.splice(2);

knex('first_name', 'last_name', 'birthdate').from('famous_people');

// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   client.query("SELECT * FROM famous_people WHERE last_name = $1::varchar OR first_name = 'Lincoln'", [inputName], (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     // for (var key in result) {
//     // 	var value = result[key];
//     // }
//     console.log("Found " + result.rows.length + " person(s) by the name '" + inputName + "':\n" + result);
//     client.end();
//   });
// });