const { Food } = require('../models');

const createFood = (data) => Food.create(data);

const getAllFood = () => Food.find(is_active:true);

module.exports = {
    createFood,
    getAllFood
};