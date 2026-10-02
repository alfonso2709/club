let homeImages = [
    "images/home1.jpg",
    "images/home2.jpg",
    "images/home3.jpg"
];

let homeNumber = 0;
let homeImage = document.getElementById("homeImage");
let timer = document.querySelector(".timer");

function nextHomeImage() {

    homeNumber++;

    if (homeNumber == homeImages.length) {
        homeNumber = 0;
    }

    homeImage.style.opacity = "0";

    setTimeout(function() {
        homeImage.src = homeImages[homeNumber];
        homeImage.style.opacity = "1";
    }, 500);
}

setInterval(nextHomeImage, 5000);

setInterval(function() {

    timer.style.width = "0%";

    setTimeout(function() {
        timer.style.width = "100%";
    }, 50);

}, 5000);

timer.style.transition = "width 5s linear";
timer.style.width = "100%";

let matchDate = new Date("October 10, 2026 19:00:00").getTime();

function countdown() {

    let now = new Date().getTime();
    let difference = matchDate - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("countdown").textContent =
        days + " : " +
        hours + " : " +
        minutes + " : " +
        seconds;
}

countdown();
setInterval(countdown, 1000);

let matches = [
    "images/match1.jpg",
    "images/match2.jpg",
    "images/match3.jpg"
];

let matchNumber = 1;

function showMatches() {

    let first = matchNumber - 1;
    let middle = matchNumber;
    let last = matchNumber + 1;

    if (first < 0) {
        first = matches.length - 1;
    }

    if (last >= matches.length) {
        last = 0;
    }

    document.getElementById("match1").src = matches[first];
    document.getElementById("match2").src = matches[middle];
    document.getElementById("match3").src = matches[last];
}

document.getElementById("matchLeft").addEventListener("click", function() {

    matchNumber--;

    if (matchNumber < 0) {
        matchNumber = matches.length - 1;
    }

    showMatches();
});

document.getElementById("matchRight").addEventListener("click", function() {

    matchNumber++;

    if (matchNumber >= matches.length) {
        matchNumber = 0;
    }

    showMatches();
});

let players = [
    ["images/player1.jpg", "PLAYER 1", "GOALS: 5 | ASSISTS: 3"],
    ["images/player2.jpg", "PLAYER 2", "GOALS: 3 | ASSISTS: 5"],
    ["images/player3.jpg", "PLAYER 3", "GOALS: 7 | ASSISTS: 2"]
];

let playerNumber = 0;

function showPlayers() {

    let first = playerNumber;
    let second = playerNumber + 1;
    let third = playerNumber + 2;

    if (first >= players.length) {
        first = 0;
    }

    if (second >= players.length) {
        second = 0;
    }

    if (third >= players.length) {
        third = 0;
    }

    document.getElementById("player1").src = players[first][0];
    document.getElementById("playerName1").textContent = players[first][1];
    document.getElementById("playerStats1").textContent = players[first][2];

    document.getElementById("player2").src = players[second][0];
    document.getElementById("playerName2").textContent = players[second][1];
    document.getElementById("playerStats2").textContent = players[second][2];

    document.getElementById("player3").src = players[third][0];
    document.getElementById("playerName3").textContent = players[third][1];
    document.getElementById("playerStats3").textContent = players[third][2];
}

document.getElementById("playerLeft").addEventListener("click", function() {

    playerNumber--;

    if (playerNumber < 0) {
        playerNumber = players.length - 1;
    }

    showPlayers();
});

document.getElementById("playerRight").addEventListener("click", function() {

    playerNumber++;

    if (playerNumber >= players.length) {
        playerNumber = 0;
    }

    showPlayers();
});

let media = [
    "images/media1.jpg",
    "images/media2.jpg"
];

let mediaNumber = 0;

function showMedia() {

    document.getElementById("media1").src = media[mediaNumber];

    mediaNumber++;

    if (mediaNumber >= media.length) {
        mediaNumber = 0;
    }

    document.getElementById("media2").src = media[mediaNumber];
}

document.getElementById("mediaLeft").addEventListener("click", function() {

    mediaNumber--;

    if (mediaNumber < 0) {
        mediaNumber = media.length - 1;
    }

    showMedia();
});

document.getElementById("mediaRight").addEventListener("click", function() {

    mediaNumber++;

    if (mediaNumber >= media.length) {
        mediaNumber = 0;
    }

    showMedia();
});