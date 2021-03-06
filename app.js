const express = require('express')
const app = express()
const port = process.env.PORT || 7070

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/secret', (req, res) => {
    res.send('Found me :)')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})