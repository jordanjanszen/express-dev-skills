var express = require('express');
var router = express.Router();

// All actual paths start with "/skills"
// --> The skills INDEX functionality will display all myDevSkills
var skillsController = require('../controllers/skills')
router.get('/', skillsController.index); // Get /skills
router.get('/new', skillsController.new); // Get /skills/new
router.get('/:skill', skillsController.show); // Get skills/show
router.post('/', skillsController.create);
router.delete('/:skill', skillsController.delete);

module.exports = router;
