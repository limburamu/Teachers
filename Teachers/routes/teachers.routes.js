const { Router } = require('express');
const router = Router();
const teachersController = require('../controllers/teachers.controller');

router.route('/')
    .post(teachersController.addTeacher)
    .get(teachersController.getTeachers);


router.route('/:teacherId')
    .get(teachersController.getTeacher)
    .delete(teachersController.deleteTeacher)
    .put(teachersController.updateTeacher);


router.route('/:teacherId/subjects')
    .get(teachersController.getSubjects);
    
    
router.route('/:teacherId/subjects/:subjectId')
    .get(teachersController.getSubject);    


module.exports = router;    
