const teachersController = {};

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
        const clubResponse;
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
module.exports = playersController