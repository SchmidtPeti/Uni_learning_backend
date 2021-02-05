const express = require('express')

const GeneralTaskCtrl = require('../controllers/general_task-ctrl')

const router = express.Router()

router.post('/addGeneralTask', GeneralTaskCtrl.createGeneraltask)
router.put('/updateGeneralTask/:id', GeneralTaskCtrl.updateGeneralTask)
router.get('/getAllGeneralTasks', GeneralTaskCtrl.getGeneralTasks)
router.delete('/deleteGeneralTask/:id', GeneralTaskCtrl.deleteGeneral_Task)


module.exports = router