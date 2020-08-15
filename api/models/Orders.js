const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Orders = mongoose.model('Order', new mongoose.Schema({
    meal_id:{type: Schema.Types.ObjectId, red:"Meal"},
    user_id:String,
}))

module.exports= Orders