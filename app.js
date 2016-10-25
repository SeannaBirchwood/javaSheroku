"Use Strict"

const lookup = require('./lookup_people');

let enteredData = process.argv[2];

lookup.getFamousPeeps(firstName, lastName, (rows) => {
	console.log(`Found ${rows.length}: ${row[column]}`);
	rows.forEach((row) => {
		for (column in row) {
			output.push(`$column}: ${row[column]}`);
		}
		console.log(output.join(', '));
	});
});