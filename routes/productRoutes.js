const express=require("express")
const{createproduct,updateproduct, findallproduct,fetchproduct}=require("../services/productService")
const productvalidation=require("../Validation/ProductValidation")
let router=express.Router()
const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
  };
router.get("/alls",findallproduct)
router.get("/:id",fetchproduct)
router.put("/update/:id",updateproduct)
router.post("/add",validate(productvalidation),createproduct)

module.exports=router
