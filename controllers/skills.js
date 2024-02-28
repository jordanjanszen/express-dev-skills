// controllers/skills.js
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function index (req, res) {
    res.render('skills/index', {
        myDevSkills: Skill.getAll(),
        title: "Jordan's Dev Skills"
    });
}

function show (req, res) {
    res.render('skills/skill', {
        myDevSkill: Skill.getOne(req.params.skill),
        title: "Skill Summary"
    });
}

function newSkill (req, res) {
    res.render('skills/new', { title: "New Skill"});
}

function create (req, res) {
    Skill.push(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    const skillId = parseInt(req.params.id);
    Skill.deleteOne(skillId);
    res.redirect('/skills');
}