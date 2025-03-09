function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
               
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
               
            }
        }
    };
}


function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].points;
        }
    }
    return null;
}
console.log(numPointsScored("Alan Anderson"));


function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].shoe;
        }
    }
    return null;
}


function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return null;
}



function teamNames() {
    const game = gameObject();
    return Object.values(game).map(team => team.teamName);
}


function playerNumbers(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].teamName === teamName) {
            return Object.values(game[team].players).map(player => player.number);
        }
    }
    return [];
}

function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
    return null;
}

function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;

    for (const team in game) {
        for (const player in game[team].players) {
            const playerData = game[team].players[player];
            if (playerData.shoe > largestShoeSize) {
                largestShoeSize = playerData.shoe;
                rebounds = playerData.rebounds;
            }
        }
    }
    return rebounds;
}
