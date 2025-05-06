const express = require('express')
const product = require("../model/product.model")





const createproduct = async(req,res)=>{
    try{
        data=req.body
        const creprod=await product.create(data)
        res.status(201).json(creprod);
    }
    catch(error){
        console.log("fail to create",error)
    }
}
const updateproduct = async(req,res)=>{
    try{
        const data=req.body
        const {id}=req.params
        const updprod=await product.update(data,{ where: { id } })
        console.log(updprod)
        res.status(201).json(updprod);
    }
    catch(error){
        console.log("failed to upadte",error)
    }
}
const fetchproduct = async (req, res) => {
    try {
      const  id  = req.params; 
      const response = await product.findByPk(id);
      res.status(200).json(response);
    } catch (error) {
      console.error("Error finding product:", error);
      res.status(500).json({ error: "Failed to find product" });
    }
  };
  
  const findallproduct = async (req, res) => {
    try {
      const allProducts = await product.findAll()
      res.status(200).json(allProducts); 
    } catch (error) {
      console.error("Failed to fetch products:", error);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  };
module.exports={
    createproduct,updateproduct,findallproduct,fetchproduct
}