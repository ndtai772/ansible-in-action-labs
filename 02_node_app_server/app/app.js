const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!\n')
})

app.listen(80)
console.log('Express server start successfully.')