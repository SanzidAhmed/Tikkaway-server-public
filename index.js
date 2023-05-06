const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const chef = require('./data/chefdata.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef is cooking');
})

app.get('/chef', (req, res) => {
    res.send(chef)
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chef.find(n => n.id == id);
    res.send(selectedChef)
})

app.listen(port, () => {
    console.log(`English professional chef is running on ${port}`);
});