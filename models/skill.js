const myDevSkills = [
    {id: 0, skill: "HTML", proficiency: "Basic proficiency. Limited experience."},
    {id: 1, skill: "CSS", proficiency: "Basic proficiency. Limited experience."},
    {id: 2, skill: "JavaScript", proficiency: "Basic proficiency. Limited experience."},
];

module.exports = {
    getAll,
    getOne,
    push,
};

function getAll () {
    return myDevSkills;
}

function getOne (id) {
    //id = parseInt(id);
    return myDevSkills.find(skill => skill.skill === id);
}

function push (skill) {
    myDevSkills.push(skill)
};