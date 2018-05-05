const MOVIL = require('../movil.js');

module.exports= (app)=>{

    app.get("/all",(req,res)=>{
    MOVIL.getAll();
    res.end();    
    });
}