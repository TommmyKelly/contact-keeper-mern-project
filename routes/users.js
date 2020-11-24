const express = require('express');

const router = express.Router();

// @route  POST api/users
//@ desc  Registera user
//@access Public
router.post('/',(req, res)=>{
    res.send('postuser')
});


module.exports = router;