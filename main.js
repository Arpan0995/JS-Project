import {Player} from "./Player.js";
import {Place} from "./Place.js";
import {Helper} from "./Helper.js";


var player1 = new Player("Arav",60,["backpack"]);

var player2 = new Player("Battle",80,["lamp"]);


var library = new Place("Library","Place full of dust and books");
var kitchen = new Place("Kitchen","Kitchen");
var dungeon = new Place("Dungeon","Dungeon");
library.items.push("Secret Key");
library.items.push("Runnning Shoes");

library.addExit("north",kitchen);
library.addExit("south",dungeon);
// console.log(library.getPlaceInfo());

player1.place = library;
player2.place = library;
// console.log(player1.displayPlayerInfo());
reduceHealth(player1, 20);
// console.log("After Damage: "+ makePretty.newLine()+ player1.displayPlayerInfo());
console.log(player2.displayPlayerInfo());
player2.items.push("Boots");
// console.log(player2.displayPlayerInfo());


function render(){
    console.clear();
    console.log(player1.getPlayerLocation());
    player1.displayPlayerInfo();
}

function go(direction) {
    player1.place = player1.place.exits[direction];
    render();
    return "";
}

function get(){
    var item = player1.place.items.pop();
    player1.items.push(item);
    render();
    return "";
}






function reduceHealth(player, health){
    player.health = player.health - health;

}