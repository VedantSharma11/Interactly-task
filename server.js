const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const contactsController = require("./controllers/contactsController");
require('dotenv').config();

const app = express();
const PORT = 3000;


mongoose.connect(process.env.DbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });

app.use(bodyParser.json());

//API guide
app.get('/', (req, res) => res.json({
    greeting: "Hello! Welcome to the Contact Service API.",
    guide: {
      getAllContacts: { description: "Get all contacts", method: "GET", endpoint: "/contacts" },
      createContact: { description: "Create a new contact", method: "POST", endpoint: "/contacts", body: { first_name: "First", last_name: "Last", email: "Email", mobile_number: "Mobile" } },
      updateContact: { description: "Update an existing contact", method: "PUT", endpoint: "/contacts/:id", body: { first_name: "New First", last_name: "New Last", email: "New Email", mobile_number: "New Mobile" } },
      deleteContact: { description: "Delete a contact", method: "DELETE", endpoint: "/contacts/:id" },
      getContactById: { description: "Get a specific contact by ID", method: "GET", endpoint: "/contacts/:id" }
    }
  }));

// CRUD endpoints
app.get("/contacts", contactsController.getAllContacts);
app.post("/contacts", contactsController.createContact);
app.put("/contacts/:id", contactsController.updateContact);
app.delete("/contacts/:id", contactsController.deleteContact);
app.get("/contacts/:id", contactsController.getContactById);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
