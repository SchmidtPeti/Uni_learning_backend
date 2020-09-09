
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MatAlap_task = new Schema(
    {
        task_description: { type: String, required: true },
        topic: { type: [String], required: true },
        hardness: { type: Number, required: true },
        solutation: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('MatAlap_tasks', MatAlap_task)