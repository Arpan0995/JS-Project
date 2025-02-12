var player1;
var player2;

player1 = {
    "name"  : "Arav",
    "health": 60,
    "place" : "Dallas",
    "items" : "backpack"
};

player2 = {
    "name" : "Battle",
    "health": 80,
    "place" : "Dallas",
    "items" : "backpack"
};

console.log(displayPlayerInfo(player1));
reduceHealth(player1, 20);
console.log("After Damage: " + displayPlayerInfo(player1));

function getPlayerName(player) {
    return player.name;
}

function getPlayerHealth(player) {
    return "\n"+ player.name + " has health " + player.health;
}

function getPlayerLocation(player) {
    return "\n"+ player.name + " is in " + player.place;
}

function getBorder() {
    return "\n ----------------------";
}

function displayPlayerInfo(player) {
    var playerInfo;

    playerInfo = getPlayerName(player);
    playerInfo += getBorder();
    playerInfo += getPlayerHealth(player);
    playerInfo += getBorder();
    playerInfo += getPlayerLocation(player);
    playerInfo += getBorder();
    return playerInfo;
}

function reduceHealth(player, health){
    player.health = player.health - health;

}