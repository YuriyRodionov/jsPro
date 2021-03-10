/*const http = require("http");
const static = require("node-static");
const fs = require("fs");

const root = new static.Server(".");

http.createServer((req, res) => {
    root.serve(req, res)
}).listen(3000)*/

/*const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("."));

app.get("/store", (res, req) => {
    fs.readFile("./responses/products.json", "utf-8", (err, data) => {
        if(!err) {
            res.send(data)
        } else {
            console.error(err);
            res.send(JSON.stringify({}));
        }
    })
})

app.listen(3000, () => {
    console.log("OK")
})*/

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('.'));

app.get('/goods', (req, res) => {
    fs.readFile('./responses/products.json', 'utf-8', (err, data) => {
        if(!err){
            res.send(data);
        }
        else{
            console.error(err);
            res.send(JSON.stringify({}))
        }
    });
});

app.get('/parampampam', (req, res) => {
    fs.readFile('./responses/cart.json', 'utf-8', (err, data) => {
        if(!err){
            res.send(data);
        }
        else{
            console.error(err);
            res.send(JSON.stringify({}))
        }
    });
});


app.post('/addToCart', (req, res) => {
    const item = req.body;
    fs.readFile('./responses/cart.json', 'utf-8', (err, data) => {
        const cartitem = JSON.parse(data);
        cartitem.push(item);
        fs.writeFile('./responses/cart.json', JSON.stringify(cartitem), err => {
            if(!err){
                res.json({res: true}); // res.send('{"result": 0}'); - don't true
                console.log("data", data)
            }
            else {
                res.json({res: false, err});
            }
        });
    });
});



app.listen(3000, () => {
    console.log('Server start on port 3000');
});