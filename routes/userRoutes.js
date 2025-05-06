const express= require("express")
const{createuser,updateuser,finduser, loginuser,findalluser}=require("../services/userService")
let router=express.Router()

router.post("/login",loginuser)
router.get("/:id",finduser)
router.put("/update/:id",updateuser)
router.post("/add",createuser)


module.exports=router