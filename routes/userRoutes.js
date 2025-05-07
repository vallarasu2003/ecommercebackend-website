const express= require("express")
const{createuser,updateuser,finduser, loginuser,findalluser}=require("../services/userService")
const {registervalidation,Loginvalidation,userupdatevalidation} =require("../Validation/UserValidation")
let router=express.Router()
const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
  };
router.get("/all",findalluser)
router.post("/login",validate(Loginvalidation),loginuser)
router.get("/:id",finduser)
router.put("/update/:id",updateuser)
router.post("/add",validate(registervalidation),createuser)


module.exports=router