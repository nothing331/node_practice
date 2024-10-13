const express = require("express");
// const dotenv = require("dotenv").config();
const router = express.Router();
const {getContacts,addContacts, getOneContacts, updateContacts,deleteContacts} = require("../controllers/contactControlers.js")

// router.route("/").get((req,res) =>{
//     res.status(200).json({"message":"Get all contacts"});
// })

router.route("/").get(getContacts);

router.route("/").post(addContacts);

router.route("/:id").get(getOneContacts);

router.route("/:id").put(updateContacts)

router.route("/:id").delete(deleteContacts);

module.exports = router;