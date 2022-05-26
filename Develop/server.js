const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection.js')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
//when you do npm start it runs sequelize and checks models to maek sure they're good. force:true - when you do npm start it recreates database. 
//only use force:true when you make serious changes to models. if it passes/syncs correctly, change to force:false.
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
});
