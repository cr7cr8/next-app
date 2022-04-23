const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express_ = require("express")
const express = express_()

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

// express.get("/abab",function(req,res,next){
//     res.send(String(Date.now()))
// })


// express.get("*", function (req, res, next) {
//     //   res.send(String(Date.now()))
//     console.log("xxdd")
//     handle(req, res, "/")
// })

app.prepare().then(

    () => {

        express.get('/api/*', (req, res) => {
            res.send("apiaaa")
        })

        express.get('*', (req, res) => {
            return handle(req, res)
        })



    }
)



express.listen(process.env.PORT || port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
})



// express.get("/abab",function(req,res,next){
//     res.send(String(Date.now()))
// })

//express.listen(port)