const express = require('express')

const app = express()

app.use(express.static(__dirname + '/../build'));

app.listen(3000, () => console.log('Express is listening on port 3000'))
