

const { debug } = require('console');
var mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const { async } = require('rxjs');

const PORT = process.env.PORT || 3050;
const app = express();
app.use(bodyparser.json());

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    next();
})

var conexion = mysql.createConnection({
    
    host: 'localhost',
    database: 'pagina_web',
    user: 'root',
    password: ''
});

conexion.connect(function (error) {
    if (error) {
        throw console.error();
    } else {

        console.log('Queremos la champions');
    }
    console.log('Conectado eficasmente');
})

app.listen(PORT,()=>{
    console.log('Server running');
})

app.get('/', (req, res) => {
    res.send('hola belha dama');
})

app.get('/productosindex', (req, res) => {
    const sql = 'SELECT * FROM productos';
    conexion.query(sql, (error, resultado) => {
        if (error) throw console.error();

        
                res.json(resultado);
   
        
    })
}

)
