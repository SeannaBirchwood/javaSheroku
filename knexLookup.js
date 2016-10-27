"Use Strict"

const pg = require("pg");
const settings = require("./settings"); // settings.json
const knex = require("knex")({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  },
  pool: {min: 1, max: 7}
});

console.log("Searching...")

const inputName = process.argv[2];

knex.select('*').from('famous_people').where('last_name', inputName)
.then((result) => {
  console.log(result);
})


var cb = []

Promise.all(cb)
.then(function () {
  return knex.destroy();
});


// }).catch(function(err) {
//   console.log(err, "There was an error");
// }).finally(function() {
//   knex.destroy();
// });


// knex('famouse_people').where({
//   last_name: inputName
// });


// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   console.log(`Input name '${inputName}'`);
//   client.query("SELECT * FROM famous_people WHERE first_name = $1;", inputName, (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
    
//     let famousPerson = result.rows[0];

//     console.log("Found " + result.rows.length + " person(s) by the name '" + inputName)
//     console.log(`- ${famousPerson.id}: ${famousPerson.first_name} ${famousPerson.last_name}, born '${famousPerson.birthday}'`);
//     client.end();
//   });
// });