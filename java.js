let homeNumber = 1;

function showHome() {
    document.getElementById("home").src = "home" + homeNumber + ".png";
}

setInterval(function() {
    homeNumber++;

    if (homeNumber > 3) {
        homeNumber = 1;
    }

    showHome();
}, 3000);


let matches = [
    ["Wed, 9/2", "FREEHOLD BORO", "Howell", "0 - 5", "L"],
    ["Tue, 9/8", "FREEHOLD BORO", "Asbury Park", "3 - 0", "W"],
    ["Thu, 9/10", "FREEHOLD BORO", "Firebirds", "3 - 1", "W"],
    ["Mon, 9/14", "FREEHOLD BORO", "Raritan", "3 - 0", "W"],
    ["Wed, 9/16", "FREEHOLD BORO", "Middletown North", "2 - 1", "W"],
    ["Sat, 9/19", "FREEHOLD BORO", "Brick Memorial", "4 - 1", "W"],
    ["Tue, 9/22", "FREEHOLD BORO", "Rumson-Fair Haven", "2 - 3", "L"],
    ["Fri, 9/26", "FREEHOLD BORO", "Seneca", "2 - 3", "L"],
    ["Wed, 9/30", "FREEHOLD BORO", "Wall", "1 - 3", "L"],
    ["Sat, 10/3", "FREEHOLD BORO", "Toms River South", "0 - 1", "L"],

    ["Tue, 10/6", "FREEHOLD BORO", "Marlboro", "4:00 PM", "UPCOMING"],
    ["Thu, 10/8", "FREEHOLD BORO", "Red Bank Regional", "6:30 PM", "UPCOMING"],
    ["Sat, 10/10", "FREEHOLD BORO", "St. Rose", "9:00 AM", "UPCOMING"],
    ["Thu, 10/14", "FREEHOLD BORO", "Manchester Township", "3:45 PM", "UPCOMING"],
    ["Thu, 10/22", "FREEHOLD BORO", "Lacey", "4:00 PM", "UPCOMING"],
    ["Sat, 10/24", "FREEHOLD BORO", "Freehold Township", "10:00 AM", "UPCOMING"]
];

let matchNumber = 10;

function showMatch(number, side) {

    if (number >= 0 && number < matches.length) {
        document.getElementById(side + "Date").textContent = matches[number][0];
        document.getElementById(side + "Team").textContent =
            matches[number][1] + " vs " + matches[number][2];
        document.getElementById(side + "Score").textContent = matches[number][3];
        document.getElementById(side + "Result").textContent = matches[number][4];
    }
}

function showMatches() {
    showMatch(matchNumber - 1, "left");
    showMatch(matchNumber, "main");
    showMatch(matchNumber + 1, "right");
}

function nextMatch() {
    if (matchNumber < matches.length - 1) {
        matchNumber++;
        showMatches();
    }
}

function previousMatch() {
    if (matchNumber > 0) {
        matchNumber--;
        showMatches();
    }
}

showMatches();


let matchDate = new Date("October 6, 2026 16:00:00").getTime();

function countdown() {

    let now = new Date().getTime();
    let time = matchDate - now;

    if (time <= 0) {
        document.getElementById("days").innerHTML = "00<br><small>DAYS</small>";
        document.getElementById("hours").innerHTML = "00<br><small>HRS</small>";
        document.getElementById("minutes").innerHTML = "00<br><small>MIN</small>";
        document.getElementById("seconds").innerHTML = "00<br><small>SEC</small>";
        return;
    }

    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor(time / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(time / (1000 * 60) % 60);
    let seconds = Math.floor(time / 1000 % 60);

    document.getElementById("days").innerHTML =
        days + "<br><small>DAYS</small>";

    document.getElementById("hours").innerHTML =
        hours + "<br><small>HRS</small>";

    document.getElementById("minutes").innerHTML =
        minutes + "<br><small>MIN</small>";

    document.getElementById("seconds").innerHTML =
        seconds + "<br><small>SEC</small>";
}

countdown();
setInterval(countdown, 1000);


let players = [
    ["#8 Aiden Fung", "MIDFIELDER", "Goals: 0 | Assists: 0"],
    ["#9 Jaden Misquith", "DEFENDER / MIDFIELDER", "Goals: 0 | Assists: 0"],
    ["#10 Humberto Hernandez", "MIDFIELDER / FORWARD", "Goals: 0 | Assists: 2"],
    ["#15 Christian Cuautle", "MIDFIELDER", "Goals: 0 | Assists: 0"],
    ["#19 Max Golkov", "DEFENDER", "Goals: 0 | Assists: 0"],
    ["#20 Ade Franklyn", "FORWARD", "Goals: 0 | Assists: 0"],
    ["#21 Klodian Jaku", "MIDFIELDER", "Goals: 0 | Assists: 0"],
    ["#27 Ryan Almeida", "MIDFIELDER / FORWARD", "Goals: 0 | Assists: 0"],
    ["Amit Agnihotri", "DEFENDER", "Goals: 0 | Assists: 0"],
    ["Anthony Ayoub", "DEFENDER / MIDFIELDER", "Goals: 0 | Assists: 0"],
    ["Jayden Aziz", "MIDFIELDER / FORWARD", "Goals: 0 | Assists: 0"],
    ["Hudson Bromberger", "MIDFIELDER / DEFENDER", "Goals: 0 | Assists: 0"],
    ["Marvin Canaca", "MIDFIELDER", "Goals: 0 | Assists: 0"],
    ["Izaak Dabby", "FORWARD / MIDFIELDER", "Goals: 0 | Assists: 0"],
    ["Jacob Garcia Zepeda", "MIDFIELDER / FORWARD", "Goals: 0 | Assists: 0"],
    ["James Iglesias", "DEFENDER", "Tackles: 0 | Games: 0"],
    ["Marcel Kolodziej", "DEFENDER", "Tackles: 0 | Games: 0"],
    ["Jael Lopez", "MIDFIELDER", "Goals: 0 | Assists: 0"],
    ["Daniel Mejia-Sanchez", "GOALKEEPER", "Saves: 0 | Clean Sheets: 0"],
    ["Anthony Menjivar Alas", "GOALKEEPER", "Saves: 0 | Clean Sheets: 0"],
    ["Dylan Mijangos Jimenez", "DEFENDER", "Tackles: 0 | Games: 0"],
    ["Alan Orozco", "DEFENDER", "Tackles: 0 | Games: 0"],
    ["#00 Christian Rebelo", "GOALKEEPER", "Saves: 0 | Clean Sheets: 0"],
    ["Noah Sharon", "MIDFIELDER / DEFENDER", "Goals: 0 | Assists: 0"]
];

let page = 0;

function showPlayers() {

    let start = page * 3;

    for (let i = 0; i < 3; i++) {

        let player = players[start + i];

        if (player) {
            document.getElementById("playerName" + (i + 1)).textContent = player[0];
            document.getElementById("playerPosition" + (i + 1)).textContent = player[1];
            document.getElementById("playerStats" + (i + 1)).textContent = player[2];
        }
    }

    document.getElementById("playerPage").textContent =
        (page + 1) + " / " + Math.ceil(players.length / 3);
}

function nextPlayer() {

    if (page < Math.ceil(players.length / 3) - 1) {
        page++;
        showPlayers();
    }
}

function previousPlayer() {

    if (page > 0) {
        page--;
        showPlayers();
    }
}

showPlayers();


let mediaNumber = 1;

function nextMedia() {

    mediaNumber++;

    if (mediaNumber > 3) {
        mediaNumber = 1;
    }

    document.getElementById("media1").src =
        "media" + mediaNumber + ".png";
}

function previousMedia() {

    mediaNumber--;

    if (mediaNumber < 1) {
        mediaNumber = 3;
    }

    document.getElementById("media1").src =
        "media" + mediaNumber + ".png";
}


let smallMediaNumber = 4;

function changeSmallMedia() {

    document.getElementById("media2").src =
        "media" + smallMediaNumber + ".png";

    smallMediaNumber++;

    if (smallMediaNumber > 6) {
        smallMediaNumber = 4;
    }
}

setInterval(changeSmallMedia, 3000);