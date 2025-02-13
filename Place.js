import {Helper} from "./Helper.js";

export class Place{
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.items = [];
        this.exits = {};
    }

    helper = new Helper();

    getPlaceInfo(){
        var placeInfo = this.title;
        placeInfo += this.helper.makePretty.newLine();
        placeInfo += this.description;
        placeInfo += this.getPlaceItems();
        placeInfo += this.getExits();
        placeInfo += this.helper.makePretty.newLine();
        return placeInfo;

    }

    addExit(direction, place){
        this.exits[direction] = place;
    }

    getExits(){
        var self = this.helper;
        var exitsList = this.helper.makePretty.newLine();
        Object.keys(this.exits).forEach(function(key){
            exitsList += self.makePretty.newLine() + key + " exit. "   ;
        });
        return exitsList;
    }
    getPlaceItems() {
        var self = this.helper;
        var ItemsInfo = this.helper.makePretty.newLine() + "Items in this place are: " ;
        this.items.forEach(function (item){
            ItemsInfo += self.makePretty.newLine() + item ;
        });
        return ItemsInfo;
    }

}