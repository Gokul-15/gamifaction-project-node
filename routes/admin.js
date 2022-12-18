const express = require('express');
const router = express.Router();
const libAdmin = require('../library/admin');

router.post('/addEventMaster', (req, res) => {
    let result = []
    try {
        result =  libAdmin.addUpdateEventMaster(req.body);
        res.status(200).json({ "status": "SUCCESS",data:result })
    } catch (err) {
        res.status(400).json({ "status": "ERROR", "error": err })
    }
})

router.post('/updateEventMaster', (req, res) => {
    let result = []
    try {
        req.body.isUpdate = true;
        result = libAdmin.addUpdateEventMaster(req.body);
        res.status(200).json({ "status": "SUCCESS" })
    } catch (err) {
        res.status(400).json({ "status": "ERROR", "error": err })
    }
})

module.exports = router;
