const express = require('express');
const router = require('./router');
const cors = require('cors');
const sequelize = require('./models/index');
const app = express();
const port = 3005;

app.use(cors()); // for cross origin (the API server has to decide to accept requests from another IP adress(different port and different url))
app.use(express.json()); // always the parser before the router
app.use(router);
app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false, alter: true });
    console.log('Connection with DATABASE success 🍪.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Example app listening at http://localhost:${port} 🥦 👾`);
});
