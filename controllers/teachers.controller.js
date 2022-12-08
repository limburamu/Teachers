const teachersController = {};

const teachers = [
    {id: 1, name: 'Sagar', age: 34, address: 'Dhulabari', subjectIds: [1, 2, 3]},
    {id: 2, name: 'Basanta', age: 27, address: 'Dhaijan', subjectIds: [1, 2]},
    {id: 3, name: 'Krishna', age: 31, address: 'Birtamode', subjectIds: [ 2, 3]},
    {id: 4, name: 'Pridev', age: 33, address: 'Charali', subjectIds: [1,  3]},
    {id: 5, name: 'Bijay', age: 36, address: 'Charpane', subjectIds: [1, 2, 3]},
]

const subjects = [
    {id: 1, name:'Science'},
    {id: 2, name: 'Math'},
    {id: 3, name: 'Social'},
]

teachersController.getSubjects = function(req, res) {
    const teacherId = parseInt(req.params.teacherId)

    let responseSubject = [];
    let teacher

    teachers.forEach(t => {
        if(t.id === teacherId)
        {
            teacher = t;
        }
    });
    for(i = 0; i < teacher.subjectIds.length; i++)
    {
        subjects.forEach(subject => {
            if(subject.id === teacher.subjectIds[i])
            {
                responseSubject.push(subject);
            }
        })
    }
    res.status(200).json(responseSubject);
}

teachersController.getSubject = function(req, res) {
    const id = parseInt(req.params.subjectId);

    let responseSubject;

    subjects.forEach(subject => {
        if(subject.id === id)
        {
            responseSubject = subject;
        }
    });
    if(responseSubject) {
        res.status(200).json(responseSubject);
    } else {
        res.send('subject not found');
    }
}

teachersController.getTeachers = function(req, res) {
    res.json(teachers);
}

teachersController.getTeacher = function(req, res) {
    const id= parseInt(req.params.teacherId);

    let responseTeacher;

    teachers.forEach(teacher => {
        if(teacher.id === id)
        {
            responseTeacher = teacher;
        }
    });
    if(responseTeacher) {
        res.status(200).json(responseTeacher)
    } else {
        res.send('teacher not found')
    }
}

teachersController.deleteTeacher = function(req, res) {
    const id = parseInt(req.params.teacherId);

    let flag = 0;

    for(i = 0; i < teachers.length; i++)
    {
        if(id === teachers[i].id)
        {
            flag = 1; 
            console.log(teachers[i].id);
            teachers.splice(i, 1);
        }
    }
    if(flag == 0)
    {
        res.send('sorry');
    } else {
        res.send('delete teacher');
    }
}

teachersController.updateTeacher = function(req, res) {
    const id = parseInt(req.params.teacherId)

    let flag = 0;

    console.log(req.body);

    for(i = 0; i < teachers.length; i++)
    {
        if(id === teachers[i].id)
        {
            flag = 1;
            teachers[i].name = req.body.name;
            teachers[i].age = req.body.age;
            teachers[i].address = req.body.address;
            teachers[i].subject = req.body.subject;
            console.log(teachers[i].id);
        }
    }
    if(flag == 0)
    {
        res.send('sorry');
    } else {
        res.send('updated teacher');
    }
}

teachersController.addTeacher = function(req, res) {
    console.log(req.body);
    teachers.push(req.body);
    res.status(201).send('teacher added');
}

module.exports = teachersController;