import express from 'express';

const app = express();
const PORT = 5000;

app.get('/products',(req, res) => {
    res.json([{ name: 'T-shirt', price: 499 }]);
});

app.listen(PORT,() => console.log('server is running'));