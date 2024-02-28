var express = require('express');
var router = express.Router();

// All actual paths start with "/skills"
// --> The skills INDEX functionality will display all myDevSkills
var skillsController = require('../controllers/skills');
router.get('/', skillsController.index);
router.get('/:skill', skillsController.show);

module.exports = router;
