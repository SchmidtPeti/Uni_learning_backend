const express = require('express')

const MathalapCtrl = require('../controllers/matalap_task-ctrl')

const router = express.Router()

router.post('/matalap_task', MathalapCtrl.createMatAlap_task)
router.put('/matalap_task/:id', MathalapCtrl.updateMatAlap_task)
router.get('/matalap_tasks', MathalapCtrl.getMatAlapTasks)
//router.delete


module.exports = router