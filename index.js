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


//import './styles/style.css';
//require("./js/script.js")



//import './styles/style.css';

//require('./js/script')



const express = require("express");
const fs = require("fs");
const path = require('path')
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 4200;

// Пробовал разные пути прописывать, результат тот же
app.use(express.static(path.resolve(__dirname, 'dist')));


app.use(bodyParser.json());




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

app.get('/cart', (req, res) => {
    fs.readFile('./responses/cart.json', 'utf-8', (err, data) => {
        if(!err){
            res.send(data);
        }
        else{
            console.error(err);
            res.send(JSON.stringify({}))
        }
    });
})


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

app.delete('/cart/:id', (req, res) => {
    const item = req.body;
    fs.readFile('./responses/cart.json', 'utf-8', (err, data) => {
      
        const good = JSON.parse(data)
        good.splice(item, 1)
        fs.writeFile('./responses/cart.json', JSON.stringify(good), err => {
            if(!err){
                res.json({res: true});
                console.log(res)
            }
            else {
                res.json({res: false, err});
                console.log(err)
            }
        });
    })
})


app.listen(PORT, () => {
    console.log(`сервер запушен на ${PORT} порту`)
})


