const express = require('express')
const app = express()
var port = process.env.PORT || 3000
app.get('/', (req, res) => res.send('hellow world! server is runing'))
app.listen(port, () => console.log('server run on port' + port))