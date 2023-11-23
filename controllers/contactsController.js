const Contact = require('../models/Contact');

// Get all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a contact
const createContact = async (req, res) => {
  const { first_name, last_name, email, mobile_number } = req.body;

  try {
    const newContact = new Contact({ first_name, last_name, email, mobile_number });
    await newContact.save();
    res.json(newContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a contact
const updateContact = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, mobile_number } = req.body;

  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { first_name, last_name, email, mobile_number },
      { new: true }
    );
    res.json(updatedContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a contact
const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedContact = await Contact.findByIdAndDelete(id);
    res.json(deletedContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific contact by ID
const getContactById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const contact = await Contact.findById(id);
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
      }
      res.json(contact);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    getAllContacts,
    createContact,
    updateContact,
    deleteContact,
    getContactById
  };