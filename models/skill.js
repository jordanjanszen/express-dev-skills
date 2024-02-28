const myDevSkills = [
    {id: 0, skill: "HTML", proficiency: "Basic proficiency. Limited experience."},
    {id: 1, skill: "CSS", proficiency: "Basic proficiency. Limited experience."},
    {id: 2, skill: "JavaScript", proficiency: "Basic proficiency. Limited experience."},
];

module.exports = {
    getAll,
    getOne,
    push,
    deleteOne,
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

function deleteOne(id) {
  id = parseInt(id);
  const idx = myDevSkills.findIndex(skill => skill.id === id);
  myDevSkills.splice(idx, 1);
}