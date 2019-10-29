const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    Nombre: String,
    correo: String,
    contrasena: String,
    direccion:{
        calle: String,
        CP: Number,
        Colonia: String,
        Ciudad: String,
    },
    telefono: Number,
    Tarjeta: Number,
    Fecha_de_expiracion: String,
    cvv: Number
},{
    timestamps:true
});

const usuarios = mongoose.model('usuarios', userSchema);

module.exports = {
    usuarios
};