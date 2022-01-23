import "phaser";
export class main_map extends Phaser.Scene {
    constructor() {
        super("MainMap");
    }

    preload () {
        this.load.image("tileset","assets/main_map/baseTileset.png");
        this.load.tilemapTiledJSON("map", "assets/main_map/map.json");
    }

    create () {
        const map = this.make.tilemap({key:"map",tileWidth :16,tileHeight:16});
        const tileset = map.addTilesetImage("baseTileset","tileset");

        const layer_base = map.createLayer("ground",tileset,0,0);
        const layer_handw = map.createLayer("hills and water",tileset,0,0);
        const layer_trees = map.createLayer("trees",tileset,0,0);
        const layer_trees2 = map.createLayer("trees2",tileset,0,0);
        const layer_roads = map.createLayer("roads",tileset,0,0);
        const layer_houses = map.createLayer("houses",tileset,0,0);
        const layer_houses2 = map.createLayer("houses2",tileset,0,0);
        const layer_props = map.createLayer("props",tileset,0,0);
        const layer_lights = map.createLayer("lights",tileset,0,0);
        const layer_interactables = map.createLayer("interactables",tileset,0,0);
        const layer_spawn = map.createLayer("spawn",tileset,0,0);
    }
}