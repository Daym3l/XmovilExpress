const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/xmovil', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message)
    }else{
        console.log("...CONECTADO A LA BD XMOVIL...")
    }
    
})

MOVIL={};

MOVIL.getAll = (callback)=>{
    db.all("SELECT * FROM moviles",(err,rows)=>{
        if (err) {
            throw err;
        } else {
            callback(null, rows)
        }        
    })

}

MOVIL.getByName= (name,callback)=>{
    stmt = db.all("SELECT * FROM moviles WHERE name = ?");
    stmt.bind(name);
    stmt.get((err, rows) => {
        if (err) {
            throw err;
        } else {
            callback(null, rows)
        }
    });   
}

MOVIL.insertMovil=(data)=>{
    var stmt = db.prepare("INSERT INTO moviles VALUES (?,?,?)");
    stmt.run(null,valor,valor);
    stmt.finalize();
}

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('..CERRANDO LA CONEXIÓN..');
});

module.exports = MOVIL;
