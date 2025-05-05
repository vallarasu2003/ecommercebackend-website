const express=require("express")
const{createproduct,updateproduct, findallproduct,fetchproduct}=require("../services/productService")
let router=express.Router()
router.get("/alls",findallproduct)
router.get("/:id",fetchproduct)
router.put("/update/:id",updateproduct)
router.post("/add",createproduct)

module.exports=router
