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

knex('famous_people').insert({'first_name': 'Chelsea', 'last_name': 'Craig', 'birthday': '1991-12-12'})
.then((result) => {
  console.log(result);
})


var cb = []

Promise.all(cb)
.then(function () {
  return knex.destroy();
});