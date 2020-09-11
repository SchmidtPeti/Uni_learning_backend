
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MatAlap_task = new Schema(
    {
        task_description: { type: String, required: true }, //Mennyi 2+2?
        task_type: { type: String, required: true },//elmélet // gyakorlat
        topic: { type: [String], required: true }, //Algebra
        level: { type: [String], required: true }, //Középiskola/Egyetem/Mester
        solutation: { type: [String], required: true },//Megoldás
        major : { type: [String], required: true },//Prog info Bsc
        solutation_stepbystp : { type: [String], required: true },//egy kép a megoldás menetéről
        solutation_by : { type: [String], required: true }, //Kozsik Péter
        solutation_by_credit : { type: [String], required: true }, //Ha van weboldala azt, ha nincs, valami egyéb, amin el lehet érni
        source: { type: [String], required: true }, //forrása
        time : { type: Number, required: true }, //1,2,3,4,5 nagyobb, nehezebb
        difficulty :{ type: Number, required: true },//1,2,3,4,5 nagyobb, nehezebb
        
    },
    { timestamps: true },
)

module.exports = mongoose.model('MatAlap_tasks', MatAlap_task)