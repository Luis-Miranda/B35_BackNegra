const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    platillo: String,
    ingredientes: [String],
    picante: {
        type: String,
        enum: ['Nada', 'Poco', 'Medio', 'Picante', 'Muy Picante']
    },
    precio: {
        type: Number,
    },
    restaurante: String,
    img_platillo: String,
    descripcion: String
});

const itemsSchema = new Schema ({
    Nombre: String,
    addProducts: [],
    Total: Number

},{
    timestamps:true
});



const Comida = mongoose.model('Comida', foodSchema);
const items = mongoose.model('items', itemsSchema);

module.exports = {
    Comida,
    items
};