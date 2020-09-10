
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MatAlap_task = new Schema(
    {
        task_description: { type: String, required: true }, //Mennyi 2+2?
        topic: { type: [String], required: true }, //Algebra
        level: { type: [String], required: true }, //Középiskola/Egyetem/Mester
        solutation: { type: [String], required: true },//Megoldás
        major : { type: [String], required: true },//Prog info Bsc
        solutation_stepbystp : { type: [String], required: true },//egy kép a megoldás menetéről
        source: { type: [String], required: true }, //forrása
        time : { type: Number, required: true }, //1,2,3
        difficulty :{ type: Number, required: true },
        
    },
    { timestamps: true },
)

module.exports = mongoose.model('MatAlap_tasks', MatAlap_task)