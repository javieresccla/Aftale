const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "testdesarrollo.es",
    user: "aftale_user",
    password: "o3Ep2%v00",
    database: "aftale",
});

connection.connect((error) => {
    if (error) {
        console.error("Error al conectar con la base de datos: ", error);
        return;
    }

    console.log("Conexión a la base de datos establecida");
});

module.exports = connection;
