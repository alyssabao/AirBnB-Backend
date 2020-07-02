var express = require('express');
var router = express.Router();
const {getAllExperiences} = require("../controllers/experiencesController");
const Experience = require("../models/experience");

/* GET users listing. */
router.get('/', getAllExperiences);

router.post("/", async (req,res)=>{
  const {title,pictureUrl,country,price,duration} = req.body;
  const newExperience = await Experience.create({
    title,
    pictureUrl,
    country,
    price,
    duration
  })
  res.send(newExperience);
})

module.exports = router;
