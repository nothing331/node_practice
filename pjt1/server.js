// server.js
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler")
const connect = require("./config/dbConnection");


// Middleware to parse JSON bodies
app.use(express.json());

app.use(errorHandler);

// Import the routes
const contactRoutes = require("./routes/contactRoutes");
const errorHandle = require("./middleware/errorHandler");


connect();
// Use the routes
app.use("/api/contacts", contactRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
