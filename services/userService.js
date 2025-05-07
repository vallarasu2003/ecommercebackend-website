const user = require('../model/user.model')
const express= require('express')
const jwt = require("jsonwebtoken");
const createuser=async(req,res) => {
    try{
       
        data=req.body
        const adduser= await user.create(data)
        res.status(201).json(adduser);

    }
    catch(error){
        console.log(error)

    }

};
const updateuser=async(req,res)=>{
    try{
        const data=req.body
        const {id}=req.params
        const upduser=await user.update(data, { where: { id: id } })
        res.status(201).json(upduser);
    }
    catch(error){
        console.log(error)
    }
}
const findalluser = async (req, res) => {
  try {
    const response = await user.findAll()
    res.status(200).json(response); 
   
  } catch (error) {
    console.error("Failed to fetch users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
const finduser=async(req,res)=>{
    try{
        id=req.params
        const fyuser=await user.findOne({ where: { email: id } })
        res.status(201).json(fyuser);
    }
    catch(error){
        console.log(error)
    }
}
const loginuser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const foundUser = await user.findOne({ where: { email } });
      if (!foundUser) {
        return res.status(404).json({ error: "User not found" });
      }
      
      if (foundUser.password !== password) {
        return res.status(401).json({ error: "Invalid password" });
      }
      const token = jwt.sign(
        { id: foundUser.id, email: foundUser.email, role: foundUser.role },
        "yourSecretKey",  
        { expiresIn: "1d" }
      );
  
      res.status(200).json({ message: "Login successful", user: foundUser ,token:token});
    } catch (error) {
      res.status(500).json({ error: "Failed to log in" });
    }
  };
module.exports={createuser,updateuser,finduser,loginuser,findalluser}


