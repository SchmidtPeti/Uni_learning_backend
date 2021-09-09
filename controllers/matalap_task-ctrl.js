const MatAlap_task = require('../models/matalap_task-model');
const Categories = require('../lists/listDictionary');
 

createMatAlap_task = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a task',
        })
    }
    const matalap_task = new MatAlap_task(body);
    console.log(matalap_task);

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
deleteMatAlap_Task = async (req, res) => {
    await MatAlap_task.findOneAndDelete({ _id: req.params.id }, (err, MatAlapTask) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!MatAlapTask) {
            return res
                .status(404)
                .json({ success: false, error: `MatAlapTask not found` })
        }

        return res.status(200).json({ success: true, data: MatAlapTask })
    }).catch(err => console.log(err))
}

updateMatAlap_task = async (req, res) => {
    const { topic,task_type,task_image,task_solution,task_solution_stepbystep,solutation_by,solutation_by_credit,source,major,level,difficulty,time} = req.body;
    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    await MatAlap_task.findOne({ _id: req.params.id }, (err, matalap_task) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Math task not found!',
            })
        }
        matalap_task.topic = topic;
        matalap_task.task_description = task_image;
        matalap_task.task_type = task_type;
        matalap_task.level = level;
        matalap_task.solutation = task_solution;
        matalap_task.major = major;
        matalap_task.solutation_stepbystep = task_solution_stepbystep;
        matalap_task.solutation_by = solutation_by
        matalap_task.solutation_by_credit = solutation_by_credit;
        matalap_task.source = source;
        matalap_task.time = time;
        matalap_task.difficulty = difficulty;
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
                console.log(error);

                return res.status(404).json({
                    error,
                    message: 'Math not updated!',
                })
            })
    })
}
getMatAlapTasks = async (req, res) => {
    const wantedCategory = Categories[req.params.cat];
    let Matlalaptasks = [];
    for(let topic of wantedCategory){
        let mergedArray = [];
        await MatAlap_task.find(topic).then(currentTopicTasks => 
            {mergedArray=Matlalaptasks.concat(currentTopicTasks)});
        Matlalaptasks = mergedArray;
    }
    return res.status(200).json({ success: true, data: Matlalaptasks });    
        /*, (err, matalaptasks) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!matalaptasks.length) {
            return res
                .status(404)
                .json({ success: false, error: `Task not found` })
        }
        return res.status(200).json({ success: true, data: matalaptasks })
    }).catch(err => console.log(err))*/
}

module.exports = {
    createMatAlap_task,
    updateMatAlap_task,
    getMatAlapTasks,
    deleteMatAlap_Task
}