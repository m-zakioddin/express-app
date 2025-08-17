const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send( 'HELLO WORLD');
});

app.get('/api/courses', ( req, res ) => {
    res.send( [1, 2, 3] );
})

const port =  3000;
app.listen( port, () => console.log(`application is running on port number ${port} `) );

