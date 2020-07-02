const Experience = require("../models/experience");

exports.getAllExperiences = async (req,res) => {
    const experiences = await Experience.find()
    res.send(experiences)
}

