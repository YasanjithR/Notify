const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const cors = require("cors");
const Category = require('./models/Category')
const categoryRoutes = require('./routes/category')
const noteRoute = require('./routes/noteRoutes')
const cronRoute = require('./routes/cronRoute')

const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;



app.use(cors());
app.use(bodyParser.json());
app.use('/category',categoryRoutes)
app.use('/note',noteRoute)
app.use('/cron',cronRoute)


const URL = process.env.MONGO_URI;

mongoose.connect(URL);


const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("Mongodb Connnection success!");
});


const createDefaultCategory = async () => {
    try {
      const existingCategory = await Category.findOne({ catName: 'Uncategorized' ,colorID :'#949494'});
      if (!existingCategory) {
        const defaultCategory = await Category.create({ catName: 'Uncategorized',colorID :'#949494' });
        console.log('Default category created:', defaultCategory);
      } else {
        console.log('Default category already exists:', existingCategory);
      }
    } catch (error) {
      console.error('Error creating default category:', error);
    }
  };

createDefaultCategory();


const server = app.listen(PORT, () =>{
    console.log(`Server is up and running on port ${PORT}`)
});

module.exports=server