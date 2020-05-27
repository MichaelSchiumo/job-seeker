const express = require('express');
const router = express.Router();

// @route GET api/contacts
// @desc GET all user's contacts
// @access Private

router.get('/', (req, res) => {
  res.send('Get the Users Contacts');
});

// @route POST api/contacts
// @desc Add New Contact
// @access private

router.post('/', (req, res) => {
  res.send('Add Contact');
});

// @route PUT api/contacts/:id
// @desc update a contact
// @access private

router.put('/:id', (req, res) => {
  res.send('Update Contact');
});

// @route DELETE api/contacts/:id
// @desc delete contact
// @access private

router.delete('/:id', (req, res) => {
  res.send('Delete Contact');
});

module.exports = router;
