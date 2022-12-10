const studentsController = {};

const students = [
    {id: 1, name: 'Ravi', age: 23, address: 'Charali', subjectIds: [1, 2, 3]},
    {id: 2, name: 'Sumit', age: 33, address: 'Dhulabari', subjectIds: [1, 2]},
    {id: 3, name: 'Sita', age: 25, address: 'Dhaijan', subjectIds: [2, 3]},
    {id: 4, name: 'Karan', age: 33, address: 'Birtamode', subjectIds: [1, 3]},
    {id: 5, name: 'Rahul', age: 28, address: 'Budhabare', subjectIds: [1, 2, 3]},
]

const subjects = [
    {id: 1, name: 'Science'},
    {id: 2, name: 'Math'},
    {id: 3, name: 'Social'},
]

studentsController.getStudents = function(req, res) {
    res.json(students);
}

studentsController.getStudent = function(req, res) {
    const id = parseInt(req.params.studentId);

    let responseStudent;

    students.forEach(student => {
        if(student.id === id)
        {
            responseStudent = student;
        }
    });
    if(responseStudent) {
        res.status(200).json(responseStudent);
    } else {
        res.send('student not found');
    }
}

studentsController.deleteStudent = function(req, res) {
    const id = parseInt(req.params.studentId)

    let flag = 0;

    for(i = 0; i < students.length; i++)
    {
        if(id === students[i].id)
        {
            flag = 1;
            console.log(students[i].id);
            students.splice(i, 1);
        }
    }
    if(flag == 0)
    {
        res.send('sorry');
    } else {
        res.send('student deleted');
    }
}


studentsController.updateStudent = function(req, res) {
    const id = parseInt(req.params.studentId)

    let flag = 0;

    console.log(req.body)

    for(i = 0; i < students.length; i++)
    {
        if(id === students[i].id)
        {
            flag = 1;
            students[i].name = req.body.name;
            students[i].age = req.body.age;
            students[i].address = req.body.address;
            students[i].subject = req.body.subject;
        }
    }
    if(flag == 0)
    {
        res.send('sorry');
    } else {
        res.send('student updated')
    }
}

studentsController.addStudent = function(req, res) {
    console.log(req.body);
    students.push(req.body);
    res.status(200).send('student added');
}

module.exports = studentsController;