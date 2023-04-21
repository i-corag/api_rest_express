require('dotenv').config();
const express = require('express');
const routerAPI = require('./routes');

//CREATE SERVER
const app = express();

//MIDDLEWARES
app.use(express.json()); // es el bodyParser que ahora esta incluido dentro de express y ya no hay que instalar la libreria aparte

//ROUTES
routerAPI(app);

//SERVER LISTEN
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
