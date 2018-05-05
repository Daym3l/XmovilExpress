/**
 * @Created with WebStorm.
 * @Author: Daymel
 * @Date: 17/3/2018
 * @Time: 22:34
 * @Version:1.0
 */
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.set('port',process.env.PORT||3000);


app.get('/', function (req, resp) {
    resp.end('Pincha')
})
app.listen(3000);
console.log("...SERVIDOR INICIADO POR ----LOCALHOST:3000----...");



