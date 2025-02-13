import {Helper} from "./Helper.js";

export class Player {
    constructor(name, health, items) {
        this.name = name;
        this.health = health;
        this.place = null;
        this.items = items;
    }

    helper = new Helper();
    
    getPlayerName() {
        return this.name.toUpperCase();
    }

    getPlayerHealth() {
        return this.helper.makePretty.newLine() + this.name + " has health " + this.health;
    }

    getPlayerLocation() {
        return this.helper.makePretty.newLine()+" Player is in " + this.place.title;
    }


    getPlayerItems() {
        var self = this.helper;
        var itemsList = "Items are: " + this.helper.makePretty.newLine();
        this.items.forEach(function(item) {
            itemsList += item + self.makePretty.newLine();
        })
        return itemsList;
    }

    displayPlayerInfo() {
        var playerInfo;

        playerInfo = this.getPlayerName();
        playerInfo +=this.helper.makePretty.newLine();
        playerInfo += this.helper.makePretty.dottedLines();
        playerInfo += this.getPlayerHealth();
        playerInfo += this.helper.makePretty.newLine();
        playerInfo += this.helper.makePretty.dottedLines();
        playerInfo += this.getPlayerLocation();
        playerInfo += this.helper.makePretty.newLine();
        playerInfo += this.helper.makePretty.dottedLines();
        playerInfo += this.helper.makePretty.newLine();
        playerInfo += this.getPlayerItems();
        return playerInfo;
    }

}