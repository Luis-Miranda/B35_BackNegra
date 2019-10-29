const {getAllFood} = require('../../services/foodServices');

const getAllFood = async () => {
    const foods = await getAllFood();
    return foods;
};

module.exports = {
    getAllFood
};