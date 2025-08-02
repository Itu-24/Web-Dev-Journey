const express = require('express');
const mongoose = require('mongoose');
const path = require('path')

const app = express();
const myemployee = require("./models/employee");


async function main() {

    try {

        await mongoose.connect('mongodb://127.0.0.1:27017/company');
        console.log('database connected');

    } catch (error) {
        console.log('DB connection failed');

    }


}
main();
app.use(express.static('src'));
let dummy = {

    name: ['harry', 'akash', 'suraj', 'chandni', 'rohan', 'sahil'],
    language: ['java', 'c++', 'c', 'python', 'c#', 'java script'],
    city: ['gaya', 'delhi', 'kolkata', 'indore', 'jaipur', 'chennai']
};

async function insertdummydata() {

    for (let index = 0; index < 10; index++) {


        let fname = Math.floor(Math.random() * (6));
        let flang = Math.floor(Math.random() * (6));
        let fcity = Math.floor(Math.random() * (6));
        let fsalary = Math.floor(Math.random() * (50000 - 15000 + 1)) + 15000;
        let fmanager = Math.floor(Math.random() * (2));


        const emp = new myemployee({ name: dummy.name[fname], salary: fsalary, language: dummy.language[flang], city: dummy.city[fcity], isManager: fmanager });
        await emp.save();

    }
    let str = "dummy data created";
    return str;
}
app.get('/createdummy', async (req, res) => {
    console.log('api called');

    await myemployee.deleteMany();
    let temp = await insertdummydata();
    console.log(temp);

    let cnt = await myemployee.countDocuments();

    res.json({ message: temp, count: cnt });

})
app.get('/', async (req, res) => {

    res.sendFile(path.join(__dirname, 'src', 'index.html'));

})

app.listen('3000', () => {
    console.log('App is runnning on http://127.0.0.1:3000');

})