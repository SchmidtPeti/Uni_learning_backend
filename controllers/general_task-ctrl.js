const General_task = require('../models/general_task-model')

createGeneraltask = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a task',
        })
    }

    const general_task = new General_task(body);

    if (!general_task) {
        return res.status(400).json({ success: false, error: err })
    }

    general_task
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: general_task._id,
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

updateGeneralTask = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    General_task.findOne({ _id: req.params.id }, (err, general_task) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Math task not found!',
            })
        }
        general_task.task_description = body.task_description
        general_task.topic = body.topic
        general_task.task_type = body.task_type
        general_task.hardness = body.hardness
        general_task.solution = body.solutation
        general_task.solution_by = body.solution_by
        general_task.solution_by_credit = body.solution_by_credit
        general_task
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: general_task._id,
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
getGeneralTasks = async (req, res) => {
    await General_task.find({}, (err, general_tasks) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!general_tasks.length) {
            return res
                .status(404)
                .json({ success: false, error: `Task not found` })
        }
        return res.status(200).json({ success: true, data: general_tasks })
    }).catch(err => console.log(err))
}

module.exports = {
    createGeneraltask,
    updateGeneralTask,
    getGeneralTasks,
}