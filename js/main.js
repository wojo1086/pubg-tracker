const parent = document.getElementById('players');
const bestTeamElem = document.getElementById('bestTeam');
let bestTeam;
const teams = new Map();
const matchHistory = [
    {
        won: false,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'erik', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'erik', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'erik', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'erik', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'erik', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'ian', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'ian', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'ian', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'ian', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'ian', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'ian', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'ian', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'erik', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'erik', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'ian', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'ian', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'ian', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'erik', 'ian', 'daniel']
    },
    {
        won: true,
        players: ['tim', 'erik', 'ian']
    },
    {
        won: false,
        players: ['tim', 'erik', 'ian']
    },
    {
        won: true,
        players: ['tim', 'erik', 'ian']
    },
    {
        won: false,
        players: ['tim', 'erik', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'erik', 'daniel']
    },
    {
        won: false,
        players: ['tim', 'erik', 'daniel']
    },
];
const playerData = {
    tim: {
        wins: 0,
        losses: 0,
        name: 'Tim'
    },
    erik: {
        wins: 0,
        losses: 0,
        name: 'Erik'
    },
    ian: {
        wins: 0,
        losses: 0,
        name: 'Ian'
    },
    daniel: {
        wins: 0,
        losses: 0,
        name: 'Daniel'
    }
};

matchHistory.forEach(match => {
    const playersString = JSON.stringify(match.players);
    if (!teams.has(playersString)) {
        teams.set(playersString, 0);
    }

    const difference = match.won ? 1 : -1;

    teams.set(playersString, teams.get(playersString) + difference);

    match.players.forEach(p => {
        playerData[p].wins += match.won ? 1 : 0;
        playerData[p].losses += !match.won ? 1 : 0;
    });
});

for (const key in playerData) {
    console.log(playerData[key]);
    const newPlayer = document.createElement('app-player');
    newPlayer.setAttribute('name', playerData[key].name);
    newPlayer.setAttribute('wins', playerData[key].wins);
    newPlayer.setAttribute('losses', playerData[key].losses);
    parent.appendChild(newPlayer);
}

teams.forEach((value, key) => {
    if (!bestTeam) {
        bestTeam = key;
    } else {
        bestTeam = teams.get(bestTeam) > value ? bestTeam : key;
    }
});
console.log(bestTeam);
bestTeamElem.textContent = JSON.parse(bestTeam).map(player => playerData[player].name).join(', ');
