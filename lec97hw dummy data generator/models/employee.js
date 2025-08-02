const mongoose = require('mongoose');
const employee = new mongoose.Schema({
    name: String,
    salary: Number,
    language:String,
    city:String,
    isManager:Boolean
});
const myemployee = mongoose.model('employee', employee);
module.exports = myemployee;