const { Router } = require('express');
const router = Router();
const studentsController = require('../controllers/students.controller');

router.route('/')
    .post(studentsController.addStudent)
    .get(studentsController.getStudents);


router.route('/:studentId')
    .get(studentsController.getStudent)
    .delete(studentsController.deleteStudent) 
    .post(studentsController.updateStudent);


router.route('/:studentId/subjects')
    .get(studentsController.getSubjects);


    
    
    
module.exports = router;    