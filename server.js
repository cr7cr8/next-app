const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express_ = require("express")
const express = express_()

const cors = require("cors")

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()




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
        // express.use('/ttt', (req, res) => {
        //     app.render(req, res, "/", {aa:"fff"})
        // })

        // app.render(req, res, actualPage, queryParams)

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