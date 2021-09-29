const express = require('express')
const app = express()
const path = require('path')
//const router = express.router()

const port = 5000;

app.listen( port, ()=>{
    console.log( 'server up on', port );
})

//ndex.html, scripts/client.js, vendors/JQ, styles/style.css

// uses
app.use( express.static( 'server/public' ) );


// routes
app.get( '/', ( req, res )=>{
    console.log( 'get route hit' );
    res.render( 'index' );
})

app.get( '/counter', ( req, res )=>{
    console.log( '/counter GET hit' );
    res.sendFile(path.join(__dirname + '/public/index.html' ));
})