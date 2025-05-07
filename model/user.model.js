const sequelize = require("../config/Database");
const  { DataTypes }  = require('sequelize')

const user= sequelize.define("User",{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    email: 
    { type: DataTypes.STRING, allowNull: false },
    password:
     { type: DataTypes.STRING ,allowNull: false },
    role:{
        type:DataTypes.STRING
    }
} )
module.exports=user;