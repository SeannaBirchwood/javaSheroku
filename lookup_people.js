"Use Strict"

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

console.log("Searching...")

const inputName = process.argv.splice(2);



client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  console.log(`Input name '${inputName}'`);
  client.query("SELECT * FROM famous_people WHERE first_name = $1;", inputName, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    
    let famousPerson = result.rows[0];

    console.log("Found " + result.rows.length + " person(s) by the name '" + inputName)
    console.log(`- ${famousPerson.id}: ${famousPerson.first_name} ${famousPerson.last_name}, born '${famousPerson.birthday}'`);
    client.end();
  });
});