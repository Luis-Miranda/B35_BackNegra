const {createFood} = require('../../services/foodServices');

const createFood = async(_, params) => {
    const food = await createFood(params.data);
    return food;
};

module.exports = {
    createFood
};