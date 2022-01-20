import "phaser";
import { WelcomeScene } from "./welcomeScene";
import { GameScene } from "./gameScene";
import { ScoreScene } from "./scoreScene";

const config : GameConfig = {
    title : "Starfall",
    width : 800,
    height : 600,
    parent : "game",
    scene : [
        WelcomeScene,
        GameScene,
        ScoreScene
    ],
    physics : {
        default : "arcade",
        arcade : {
            debug : false
        }
    },
    backgroundColor : "#000033"
};

export class Starfall extends Phaser.Game {
    constructor(config : GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new Starfall(config);
}