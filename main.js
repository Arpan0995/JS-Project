
var makePretty ={
    blank: function () {
        return "";
    },

    newLine: function () {
        return "\n";
    },

    line: function (length, character) {
        var longString = "****************************************";
        longString += "----------------------------------------";
        longString += "========================================";
        longString += "++++++++++++++++++++++++++++++++++++++++";
        longString += "                                        ";

        length = Math.max(0, length);
        length = Math.min(40, length);
        return longString.substr(longString.indexOf(character), length);
    },

    wrap : function (text, length, character) {
        var padLength = length - text.length - 3;
        var wrapText = character + " " + text;
        wrapText += makePretty.line(padLength, " ");
        wrapText += character;
        return wrapText;
    },

    box: function (text, length, character) {
        var boxText = makePretty.newLine();
        boxText += makePretty.line(length, character) + makePretty.newLine();
        boxText += makePretty.wrap(text, length, character) + makePretty.newLine();
        boxText += makePretty.line(length, character) + makePretty.newLine();
        return boxText;
    }
}

var Player = function (name, health) {
    var newLine = makePretty.newLine();
    var place = null;
    var items = [];

    var getPlayerName = function () {
        return name;
    };

    var getPlayerHealth = function () {
        return health;
    }

    this.getPlayerLocation = function () {
        return place;
    }



    var getItems = function () {
        var itemsList = "Items are: " + newLine;
        items.forEach(function(item) {
            itemsList +=  "  -" + item + newLine;
        })
        return itemsList;
    }

    this.setPlayerItems = function (item) {
        items.push(item);
    }

    var displayPlayerInfo = function () {
        var info = makePretty.box(getPlayerName(), 40, "*");
        info += "Health: " + getPlayerHealth() ;
        info += newLine;
        info += getItems()
        info += makePretty.line(40,"*");
        info += newLine;
        return info;
    }

    this.printPlayerInfo = function () {
        console.log(displayPlayerInfo());
    }

    this.setPlayerLocation = function (location){
        place = location;
    }


}

let Place = function (title, description) {
    let newLine = makePretty.newLine();
    let items = [];
    let exits = {};

    let getPlaceInfo = function () {
        let placeInfo = getTitleInfo();
        placeInfo += description;
        placeInfo += newLine;
        placeInfo += newLine;
        placeInfo += getPlaceItems();
        placeInfo += getExits();
        placeInfo += makePretty.line(40, "=") + newLine;
        return placeInfo;

    }
    this.printPlaceInfo = function () {
        console.log(getPlaceInfo());
    }

    let getTitleInfo = function () {
        return makePretty.box(title, title.length + 4, "=");
    }

    let getDestination = function (direction){
        return exits[direction]
    }

    this.addItem = function (item) {
        items.push(item);
    }

    this.addExit = function (direction, place){
        exits[direction] = place;
    }

    let getExits = function () {
        let exitsList = "Exits are:" + newLine;
        Object.keys(exits).forEach(function(key){
            exitsList += "  -" + key + newLine  ;
        });
        return exitsList;
    }
    let getPlaceItems = function () {
        let ItemsInfo = "Items in this place are: " + newLine;
        items.forEach(function (item){
            ItemsInfo += "   -" + item + newLine ;
        });
        return ItemsInfo;
    }

    this.getLast = function () {
        return items.pop();
    }

    this.getExit = function (direction){
        console.log(exits);
        return exits[direction];
    }



}

function render(){
    console.clear();
    player.getPlayerLocation().printPlaceInfo();
    player.printPlayerInfo();
}

function go(direction) {
    var place = player.getPlayerLocation();
    var destination = place.getExit(direction);
    player.setPlayerLocation(destination)
    render();
    return "";
}

function get(){
    var place = player.getPlayerLocation();
    var item = place.getLast();
    player.setPlayerItems(item);
    render();
    return "";
}




let library = new Place("Library","Place full of dust and books");
let dungeon = new Place("Dungeon","Dungeon");

library.addItem("Secret Key");
dungeon.addItem("Runnning Shoes");

library.addExit("north",dungeon);
dungeon.addExit("south",library);


let player  = new Player("Rocco",80);
player.setPlayerItems("Sword");
player.setPlayerLocation(dungeon);

render();
go("south");
 get();
