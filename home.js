const express = require('express');
const redis = require('redis');
const app = express();
const clinet = redis.createClient();
app.get( '/',(req, res) => {
    clinet.get('visitsCounter', (err,visitsCounter) => {
        res.send('Visits Counter :' +visitsCounter);
        clinet.send('visitsCounter', parseInt(visitsCounter) +1)


    })
})


app.listen(8080,() =>{
    console.log('listening on port 8080');
})













