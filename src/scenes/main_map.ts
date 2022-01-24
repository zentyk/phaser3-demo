import "phaser";
export class main_map extends Phaser.Scene {
    cursors : any;
    player : any;
    keyGame1 : any;
    keyGame2 : any;

    constructor() {
        super("MainMap");
    }

    preload () {
        this.load.image("tileset","assets/main_map/baseTileset.png");
        this.load.tilemapTiledJSON("map", "assets/main_map/map.json");
        this.load.spritesheet("wizard", "assets/player/player.png",{frameHeight:50, frameWidth:50});
        this.load.atlas("player","assets/player/player.png","assets/player/wizards_atlas.json");
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

        this.player = this.physics.add.sprite(384,31.6666666666667,"player", "player_idle_0");
        this.physics.add.collider(this.player,layer_interactables);

        this.cameras.main.startFollow(this.player);

        //enable cursor keys
        this.cursors = this.input.keyboard.createCursorKeys();

        this.keyGame1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        this.keyGame2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
    }

    update() {
        if(this.cursors.left.isDown) {
            this.player.setVelocityX(-200);
        }
        else if(this.cursors.right.isDown) {
            this.player.setVelocityX(200);
        }
        else {
            this.player.setVelocityX(0);
        }

        if(this.cursors.up.isDown) {
            this.player.setVelocityY(-200);
        }
        else if(this.cursors.down.isDown) {
            this.player.setVelocityY(200);
        }
        else {
            this.player.setVelocityY(0);
        }

        if(this.keyGame1.isDown){
            this.scene.start("GameArkanoid");
        }
        if(this.keyGame2.isDown){
            this.scene.start("GameStarfall");
        }
    }
}