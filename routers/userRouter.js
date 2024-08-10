const express = require('express');

const router = express.Router();

router.post('/add', (req, res) => { 
    console.log(req.body);
    res.send('Response from user add')
});

// getall
// getbyid
// update

// delete 

router.get('/getall', (req, res) => { 
    res.send('Response from user getall')
});

// /: denotes url parameter
router.get('/getbyid/:id', (req, res) => { 
    console.log(req.params.id);
    
    res.send('Response from user getbyid')
});

router.get('/update', (req, res) => { 
    res.send('Response from user update')
});

router.get('/delete', (req, res) => { 
    res.send('Response from user delete')
});

module.exports = router;