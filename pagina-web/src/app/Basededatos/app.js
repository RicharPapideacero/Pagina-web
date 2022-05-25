var mysql = require('mysql');

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
})

conexion.query('SELECT * FROM producto', function (error, resultado, fields) {
    if (error) 
        throw console.error();
    
        resultado.forEach(resultado => {
            console.log(resultado);
        });
    }
)
conexion.end();

