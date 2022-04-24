const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express_ = require("express")
const express = express_()

const cors = require("cors")



const dev = process.env.NODE_ENV !== 'production'
const hostname = '192.168.0.100'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

const { authenticateToken, generateAndDispatchToken } = require("./middware/auth")




console.log(">> Process.env.NODE_ENV = " + process.env.NODE_ENV, process.env.PORT || port)

app.prepare().then(

    () => {
        express.disable('x-powered-by');
        express.use(cors({}))

        express.get('/api/*', (req, res) => {
            res.send("api-----dd--")
        })

        express.get('/api', (req, res) => {
            res.send("api")
        })

     

        express.get(/(^\/$)|(^\/home$)/i,(req,res,next)=>{
            console.log("home page",req.params)
            app.render(req, res, "/", {})
        })

        // express.get("/",(req,res,next)=>{
        //     console.log("home page",req.params)
        //     app.render(req, res, "/", {})
        // })

      


        // express.use('/ttt', (req, res) => {
        //     app.render(req, res, "/", {aa:"fff"})
        // })

        // app.render(req, res, actualPage, queryParams)

        express.get('*',  (req, res) => {
            return handle(req, res)
        })

    }
)



express.listen(process.env.PORT || port, (err) => {
    if (err) throw err
    console.log(`>> Ready on ${hostname}:${process.env.PORT || port}`)
})



// express.get("/abab",function(req,res,next){
//     res.send(String(Date.now()))
// })

//express.listen(port)