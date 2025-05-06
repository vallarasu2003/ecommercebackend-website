const sequelize = require("../config/Database");
const  { DataTypes }  = require('sequelize')

const product= sequelize.define("Product",{
    productId: 
    { type: DataTypes.STRING},
    productName:
     { type: DataTypes.STRING ,allowNull: false },
     productPrice:
     { type: DataTypes.INTEGER ,allowNull: false },
     productInfo:
     { type: DataTypes.STRING ,allowNull: false },
     productPurchase:
     { type: DataTypes.STRING },
     CompanyName:
     { type: DataTypes.STRING  },
     CompanyDetail:
     { type: DataTypes.STRING  },
     CompanyRating:
     { type: DataTypes.STRING  }

} )
module.exports=product;