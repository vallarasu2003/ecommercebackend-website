const {Sequelize} = require('sequelize');
const sequelize=new Sequelize('valt','postgres','admin',{
    host:'localhost',
    dialect:'postgres',
    port: 5432,
    logging: false,
})
const connectDB = async () => {
try {
    await sequelize.authenticate();
    console.log("Database connection established successfully!");
  } catch (error) {
    console.error(" Unable to connect to the database:", error);
   
  }
}
connectDB()
module.exports = sequelize;