import "phaser";

const config : GameConfig = {
    title : "Starfall",
    width : 800,
    heigth : 800,
    parent : "game",
    backgroundColor : "#18216D"
};

export class Starfall extends Phaser.Game {
    constructor(config : GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new Starfall(config);
}