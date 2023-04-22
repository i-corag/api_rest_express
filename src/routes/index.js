const userRouter = require('./users.routes');
const productsRouter = require('./products.routes');
const categoriesRouter = require('./categories.routes');
const brandsRouter = require('./brands.routes');

function routerAPI(app) {
  app.use('/users', userRouter);
  app.use('/products', productsRouter);
  app.use('/categories', categoriesRouter);
  app.use('/brands', brandsRouter);
}

module.exports = routerAPI;
