const { debug } = require('console');
var mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const { async } = require('rxjs');

const PORT = process.env.PORT || 3050;
const app = express();
app.use(bodyparser.json());

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
    const sql = 'SELECT idProducto,DireccionProducto,NombreProducto,DescripcionProducto,CantidadExistenciaP,CantidadCompraP,CategoriaProducto FROM producto';
    conexion.query(sql, (error, resultado) => {
        if (error) throw console.error();

        resultado.forEach(resultado => {
            res.json(resultado);
        });
        
    })
}
)
