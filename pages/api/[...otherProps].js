import Cors from 'cors'


export default async function handler(req, res) {
    
  

    Cors({/* methods: ['GET', 'HEAD'],*/ })(req, res, function () { /*console.log("dummy call back")*/})
        
   
    res.status(200).send(`
    
      <h1>other api ${Date.now()}</h1>
      <h3>${JSON.stringify(req.query)}  ${JSON.stringify(req.query.otherProps)}</h3>
    
    
    `)


}
