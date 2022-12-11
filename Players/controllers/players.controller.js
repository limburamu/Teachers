const playersController = {};

const players = [
    {id: 1, name: 'Sagar', age: 34, address: 'Dhulabari', clubIds: [1, 2, 3]},
    {id: 2, name: 'Basanta', age: 27, address: 'Dhaijan', clubIds: [1, 2]},
    {id: 3, name: 'Krishna', age: 31, address: 'Birtamode', clubIds: [ 2, 3]},
    {id: 4, name: 'Pridev', age: 33, address: 'Charali', clubIds: [1,  3]},
    {id: 5, name: 'Bijay', age: 36, address: 'Charpane', clubIds: [1, 2, 3]},
]

const clubs = [
    {id: 1, name:'Sankata'},
    {id: 2, name: 'Manang'},
    {id: 3, name: 'Machindra'},
]

playersController.getPlayers = (req, res) => {
    players.forEach(player => {
        players.clubs = [];
        clubs.forEach(club => {
            const pos = player.clubIds.indexOf(club.id);
            if(pos !== -1) {
                players.clubs.push(club);
            }
        })
    });
    res.json(players);
}


playersController.getPlayer = (req, res) => {
    const playerId = parseInt(req.params.playerId);
    let playerResponse;

    players.forEach(player => {
        if(player.id === playerId) {
            playerResponse = player;
        }
    });
    if(playerResponse) {
        res.status(200).json(playerResponse)
    } else {
        res.status(404).json('Player with the given player id is not found');
    }
}

playersController.getPlayer = (req, res) => {
    const playerId = parseInt(req.params.playerId);
    let playerResponse;

    players.forEach(player => {
        if(player.id === playerId) {
            playerResponse = player;
        }
    });
    if(playerResponse) {
        const playerId = parseInt(req.params.playerId);
        const clubIds = playerResponse.clubIds;
        let clubResponse;
        const pos = clubIds.indexOf(clubId); 

        if(pos !== -1) {
            clubs.forEach(club => {
                if(club.id === clubId) {
                    clubResponse = club;
                }
            });
            res.status(200).json(clubResponse);
        } else {
            res.status(404).json('Player with given player id is not found');
        }
        res.status(200).json(playerResponse);
    } else {
        res.status(404).json('Player with the given player id is not found');
    }
}


playersController.deletePlayer = function(req, res) {
    const id = parseInt(req.params.playerId);

    let flag = 0;
    
    for(i = 0; i < players.length; i++)
    {
        if(id === players[i].id)
        {
            flag = 1;
            console.log(players[i].id);
            players.splice(i, 1);
        }
    }
    if(flag == 0)
    {
        res.send('sorry');
    } else {
        res.send('player deleted');
    }
}

playersController.updatePlayer = function(req, res) {
    const id = parseInt(req.params.playerId)

    let flag = 0;

    console.log(req.body);

    for(i = 0; i < players.length; i++)
    {
        if(id === players[i].id)
        {
            flag = 1;
            players[i].name = req.body.name;
            players[i].age = req.body.age;
            players[i].address = req.body.address;
            players[i].club = req.body.club;
            console.log(players[i].id);
        }
    }
    if(flag == 0)
    {
        res.send('sorry');
    } else {
        res.send('player updated');
    }
}

playersController.addPlayer = function(req, res) {
    console.log(req.body);
    players.push(req.body);
    res.status(201).send('Player added');
}


playersController.getClubs = function(req, res) {
    const playerId = parseInt(req.params.playerrId)

    let responseClubs = [];
    let player;

    players.forEach(t => {
        if(t.id === playerId)
        {
            player = t;
        }
    });
    for(i = 0; i < player.clubsIds.length; i++)
    {
        clubs.forEach(club => {
            if(club.id === player.clubIds[i])
            {
                responseClub.push(subject);
            }
        })
    }
    res.status(200).json(responseClub);
}


module.exports = playersController