require('dotenv').config();
const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const sequelize = require('./config/sequelize');

const app = express();

app.use(cors());
app.use(bodyParser.json());

//Models
require('./routes/modelsRoute');

//Controllers
// const homeRouter = require('./routes/home');
// const bukuRouter = require('./routes/buku');
// const userRouter = require('./routes/user');
// const cartRouter = require('./routes/cart');

//Route
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
