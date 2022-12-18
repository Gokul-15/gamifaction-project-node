const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('*', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next()
});


app.use('*',(req,res,next)=>{
    res.status(400).json({"status":"fail","message":`Cant find ${req.orginalUrl} in this server !! `})
})
app.listen(port, (req, res) => {
    console.log(`server start listening on port ${port}`)
})

module.exports = app;
