require('dotenv').config();

const app = require('./app')
require('./database');

async function main() {
	await app.listen(80);
	console.log('En linea: servidor montado en el puerto 80.');
}

main();
