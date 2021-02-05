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
    const {difficulty,major,semester,solution,solution_by,solution_by_credit,source,subject_name,task_description,task_type,time,topic,university} = req.body

    if (!req.body) {
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
        general_task.task_description = task_description
        general_task.topic = topic
        general_task.task_type = task_type
        general_task.difficulty = difficulty
        general_task.solution = solution
        general_task.solution_by = solution_by
        general_task.solution_by_credit = solution_by_credit
        general_task.major = major
        general_task.semester = semester
        general_task.source = source
        general_task.subject_name = subject_name
        general_task.time = time
        general_task.university = university
        general_task.save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: general_task._id,
                    message: 'Math task updated!',
                })
            })
            .catch(error => {
                console.log(error);
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
deleteGeneral_Task = async (req, res) => {
    await General_task.findOneAndDelete({ _id: req.params.id }, (err, General_task) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!General_task) {
            return res
                .status(404)
                .json({ success: false, error: `General_task not found` })
        }

        return res.status(200).json({ success: true, data: General_task })
    }).catch(err => console.log(err))
}

module.exports = {
    createGeneraltask,
    updateGeneralTask,
    getGeneralTasks,
    deleteGeneral_Task
}