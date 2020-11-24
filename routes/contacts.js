const express = require('express');

const router = express.Router();

// @route  GET api/contacts
//@ desc  Get all users contacts for one user
//@access Private
router.get('/',(req, res)=>{
    res.send('Get all contacts')
});

// @route  POST api/contacts
//@ desc  add new contact
//@access Private
router.post('/',(req, res)=>{
    res.send('Add conatct')
});

// @route  PUT api/contacts/:id
//@ desc  Update contact
//@access Private
router.put('/:id',(req, res)=>{
    res.send('update contact')
});

// @route  DELETe api/contacts/:id
//@ desc  delete contact
//@access Private
router.delete('/:id',(req, res)=>{
    res.send('delete contact')
});

module.exports = router;