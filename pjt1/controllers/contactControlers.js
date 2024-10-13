 const asyncHandler =require("express-async-handler");
 const contactsDB = require("../models/contactModel");
const dbConnect = require("../config/dbConnection");
const { param } = require("../routes/contactRoutes");
const { connect } = require("mongoose");
 
 const getContacts = asyncHandler(async(req, res) =>{
   const contacts = await contactsDB.find();
    res.status(200).json(contacts);
 });

 const addContacts = asyncHandler(async(req, res) =>{
    console.log("The request body is : ", req.body);
    const {name, email,phone} = req.body;
    if(!name ||!email||!phone){
      res.status(400);
      throw new Error("All fields are needed");
    }
    const contact = await contactsDB.create({name,email,phone}); 
    res.status(201).json(contact);
 });

 const getOneContacts = asyncHandler(async(req, res) =>{
   const contact = await contactsDB.findById(req.params.id);
   if(!connect){
      req.status(404);
      throw new Error("contact not found");
   }
    res.status(200).json(contact);
 });


 const updateContacts = asyncHandler(async(req, res) =>{
   const contact = await contactsDB.findById(req.params.id);
   if(!connect){
      req.status(404);
      throw new Error("contact not found");
   }
   const update = await contactsDB.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.status(200).json(update);
 });

 const deleteContacts = asyncHandler(async(req, res) =>{
   const deleteIt = await contactsDB.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteIt);
 });

 module.exports = {getContacts, addContacts, getOneContacts, updateContacts,deleteContacts};