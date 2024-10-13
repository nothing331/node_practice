const express = require("express");
// const dotenv = require("dotenv").config();
const router = express.Router();
const {getContacts,addContacts, getOneContacts, updateContacts,deleteContacts} = require("../controllers/contactControlers.js")

// router.route("/").get((req,res) =>{
//     res.status(200).json({"message":"Get all contacts"});
// })

router.route("/").get(getContacts).post(addContacts);

router.route("/:id").get(getOneContacts).put(updateContacts).delete(deleteContacts);

module.exports = router;