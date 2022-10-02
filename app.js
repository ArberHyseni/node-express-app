const express = require('express');

const app = express();

app.get('/', (request, response) => {
	response.send('Hello World!')
})

app.listen(process.env.port || 3000, () => {
	console.log(`Server started in port ${process.env.port || 3000}`)
})