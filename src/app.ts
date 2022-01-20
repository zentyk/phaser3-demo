import "phaser";

const config : GameConfig = {
    title : "Starfall",
    width : 800,
    heigth : 800,
    parent : "game",
    backgroundColor : "#000000",
};

export class Starfall extends Phaser.Game {
    constructor(config : GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new Starfall(config);
}