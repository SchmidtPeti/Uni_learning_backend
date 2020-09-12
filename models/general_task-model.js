
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const General_task = new Schema(
    {
        task_description: { type: String, required: true }, //Mennyi 2+2?
        task_type: { type: String, required: true },//elmélet // gyakorlat
        topic: { type: String, required: true }, //Algebra
        solution: { type: String, required: true },//Megoldás
        major : { type: String, required: true },//Prog info Bsc
        subject_name : { type: String, required: true },//tantárgy neve
        semester : {type: String, required: true},//Melyik félévben
        university : {type: String, required: true},//Melyik egyetemen
        solution_by : { type: String, required: true }, //Kozsik Péter
        solution_by_credit : { type: String, required: true }, //Ha van weboldala azt, ha nincs, valami egyéb, amin el lehet érni
        source: { type: String, required: true }, //forrása
        time : { type: Number, required: true }, //1,2,3,4,5 nagyobb, nehezebb
        difficulty :{ type: Number, required: true },//1,2,3,4,5 nagyobb, nehezebb
        
    },
    { timestamps: true },
)

module.exports = mongoose.model('General_tasks', General_task)