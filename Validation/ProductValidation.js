const joi =require('joi')
const productvalidation = joi.object({
    productName:joi.string().max(15).required(),
    productPrice:joi.number().min(100).required(),
    productInfo:joi.string().max(50).required(),
    CompanyRating:joi.string().max(1).required(),
    CompanyDetail:joi.string().max(50).required(),
    CompanyName:joi.string().max(15).required(),
    
})
module.exports=productvalidation