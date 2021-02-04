const express = require('express')

const MathalapCtrl = require('../controllers/matalap_task-ctrl')

const router = express.Router()

router.post('/matalap_task', MathalapCtrl.createMatAlap_task)
router.put('/updateMatTask/:id', MathalapCtrl.updateMatAlap_task)
router.get('/matalap_tasks', MathalapCtrl.getMatAlapTasks)
router.delete('/deleteMatTask/:id',MathalapCtrl.deleteMatAlap_Task)


module.exports = router