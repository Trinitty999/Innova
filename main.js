const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'src')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'src', 'index.html'))
})

app.get('/checkHealth', (req, res) => {
     res.send({
        health: "OK!",
        version: "1.0.0",
        serverStatus: "Running"
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})