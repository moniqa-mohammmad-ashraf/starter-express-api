const routes = require('express').Router();
const mongoose = require('mongoose');
const exerciseSchema = require('../models/models')(mongoose);
const UserExerciseTracker = new mongoose.model('UserExerciseTracker', exerciseSchema);

routes.post('/addUserExercise', async (req, res) => {
    const addUserExercise = new UserExerciseTracker({
        name: req.body.Name,
        description: req.body.Desc,
        activityType: req.body.ActTyp,
        duration: req.body.Duration,
        date: req.body.Datetxt
    });

    const result = await addUserExercise.save();
    res.send({ message: 'data added' });
});
routes.get('/', async (req, res) => {
    res.send('Hello');
});

// // Retrieve all Excersice
routes.get('/getuserexercise', async (req, res) => {
    var activities = await UserExerciseTracker.find();
    res.send({ data: activities });
});

routes.delete('/delUserExercise', async (req, res) => {
    const _id = req.body.id;
    var user = await UserExerciseTracker.deleteOne({ _id });
    res.send({ message: "Exercise deleted successfully" });
})


routes.post('/updateUserExercise', async (req, res) => {
    const _id = req.body.id;
    const updateactivity = await UserExerciseTracker.findByIdAndUpdate({ _id },
        {
            $set: {
                name: req.body.Name,
        description: req.body.Desc,
        activityType: req.body.ActTyp,
        duration: req.body.Duration,
        date: req.body.Datetxt
            }
        },
        { new: true });
    res.send({message: 'activity updated'});

});

module.exports = routes;
