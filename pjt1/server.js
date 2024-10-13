// server.js
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();


// Middleware to parse JSON bodies
app.use(express.json());

// Import the routes
const contactRoutes = require("./routes/contactRoutes");

// Use the routes
app.use("/api/contacts", contactRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
