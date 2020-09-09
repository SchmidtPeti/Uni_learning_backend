const MatAlap_task = require('../models/matalap_task-model')

createMatAlap_task = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a task',
        })
    }

    const matalap_task = new MatAlap_task(body)

    if (!matalap_task) {
        return res.status(400).json({ success: false, error: err })
    }

    matalap_task
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: matalap_task._id,
                message: 'Math task created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Math task not created',
            })
        })
}

updateMatAlap_task = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    MatAlap_task.findOne({ _id: req.params.id }, (err, matalap_task) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Math task not found!',
            })
        }
        matalap_task.task_description = body.task_description
        matalap_task.topic = body.topic
        matalap_task.hardness = body.hardness
        matalap_task.solutation = body.solutation
        matalap_task
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: matalap_task._id,
                    message: 'Math task updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Math not updated!',
                })
            })
    })
}

module.exports = {
    createMatAlap_task,
    updateMatAlap_task,
}