// controllers/skills.js
const Skill = require('../models/skill');

module.exports = {
    index,
    show
};

function index (req, res) {
    res.render('skills/index', {
        myDevSkills: Skill.getAll()
    });
}

function show (req, res) {
    res.render('skills/skill', {
        myDevSkill: Skill.getOne(req.params.skill),
    });
}