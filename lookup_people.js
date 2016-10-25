"Use Strict"

//this file is acting like a db (Fabio's lecture w4d2-db-from-js/code)

const pg = require("pg");
const settings = require("./settings"); // settings.json
const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});
const db = client //new pg.Client(config);
//const famous = require("./famous_people");



console.log("Searching ... ")
//console.log(`Found ${args.length} person(s) by the name '${args.join("")}':`);

// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   client.query("SELECT $1::int AS number", ["1"], (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log(result.rows[0].number); //output: 1
//     client.end();
//   });
// });

const getFamousPeeps = (firstName, lastName, callback) => {
	db.connect((err) => {
		if (err) throw err;

		let query = 
		`SELECT * FROM famous_people
		WHERE first_name = ${args} OR last_name = ${args};`;

	db.query(query, [firstName, lastName], (err, result) => {
		if (err) {
			console.log("Famous person(s) couldn't be found", err);
			callback([]);
		} else {
			callback(result.rows);
		}
		db.end();
	});
	});
}

module.exports = {
	getFamousPeeps: getFamousPeeps
};