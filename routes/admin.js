const express = require('express');
const router = express.Router();
const libAdmin = require('../library/admin');

router.post('/addEventMaster', async (req, res) => {
    try {
        result = await libAdmin.addUpdateEventMaster(req.body)
        res.status(200).json({ "status": "SUCCESS", "data": result })
    } catch (err) {
        res.status(400).json({ "status": "ERROR", "error": err })
    }
})

router.post('/updateEventMaster', async (req, res) => {
    let result = []
    try {
        req.body.isUpdate = true;
        result = await libAdmin.addUpdateEventMaster(req.body)
        res.status(200).json({ "status": "SUCCESS" })
    } catch (err) {
        res.status(400).json({ "status": "ERROR", "error": err })
    }
})

router.get('/listEvents', async (req, res) => {
    let result = []
    try {
        result = await libAdmin.listEvents();
        res.status(200).json({ "status": "SUCCESS", data: result })
    } catch (err) {
        res.status(400).json({ "status": "ERROR", "error": err })
    }
})


router.post('/addEmployeeDtls', async (req, res) => {
    let result = []
    try {
        result = await libAdmin.addEmployeeDtls(req.body)
        res.status(200).json({ "status": "SUCCESS"})
    } catch (err) {
        res.status(400).json({ "status": "ERROR", "error": err })
    }
})


router.post('/associateEvntAgainstEmployee', async (req, res) => {
    let result = []
    try {
        result = await libAdmin.addDeleteEmployeeEvent(req.body)
        res.status(200).json({ "status": "SUCCESS"})
    } catch (err) {
        res.status(400).json({ "status": "ERROR", "error": err })
    }
})

router.post('/deleteEvntAgainstEmployee', async (req, res) => {
    let result = []
    try {
        req.body.isUpdate = true;
        result = await libAdmin.addDeleteEmployeeEvent(req.body)
        res.status(200).json({ "status": "SUCCESS"})
    } catch (err) {
        res.status(400).json({ "status": "ERROR", "error": err })
    }
})


router.post('/getEmployeeLeaderBasedOnCriteria', async (req, res) => {
    let result = []
    try {
        result = await libAdmin.getEmployeeLeaderBasedOnCriteria(req.body)
        res.status(200).json({ "status": "SUCCESS",data:result})
    } catch (err) {
        res.status(400).json({ "status": "ERROR", "error": err })
    }
})


module.exports = router;
