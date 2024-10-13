 const getContacts = (req, res) =>{
    res.status(200).json({"message":"Get all contacts"});
 };

 const addContacts = (req, res) =>{
    console.log("The request body is : ", req.body);
    res.status(200).json({"message":"Contact created"});
 };

 const getOneContacts = (req, res) =>{
    res.status(200).json({"message":`Get id : ${req.params.id}`});
 };


 const updateContacts = (req, res) =>{
    res.status(200).json({"message":`Updated id : ${req.params.id}`});
 };

 const deleteContacts = (req, res) =>{
    res.status(200).json({"message":`Deleted id : ${req.params.id}`});
 };

 module.exports = {getContacts, addContacts, getOneContacts, updateContacts,deleteContacts};