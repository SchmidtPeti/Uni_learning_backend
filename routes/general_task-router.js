const express = require('express')

const GeneralTaskCtrl = require('../controllers/general_task-ctrl')

const router = express.Router()

router.post('/addGeneralTask', GeneralTaskCtrl.createGeneraltask)
router.put('/matalap_task/:id', GeneralTaskCtrl.updateGeneralTask)
router.get('/getAllGeneralTasks', GeneralTaskCtrl.getGeneralTasks)


module.exports = router