require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/sequelize');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// const homeRouter = require('./routes/home');
// const bukuRouter = require('./routes/buku');
// const userRouter = require('./routes/user');
// const cartRouter = require('./routes/cart');

// const User = require('./models/user');
// const Buku = require('./models/buku');
// const Cart = require('./models/cart');

// app.use(homeRouter);
// app.use('/buku', bukuRouter);
// app.use('/user', userRouter);
// app.use('/cart', cartRouter);

app.get("/", (request, response) => {
    response.json({
        info: 'Hello world! Yesaya'
    });
})

app.listen(process.env.PORT_APPLICATION, () => {
    console.log('server started at port '+ process.env.PORT_APPLICATION);
    sequelize.sync();
})
