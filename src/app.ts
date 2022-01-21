import "phaser";
import { WelcomeScene } from "./scenes/welcomeScene";
import { GameStarfall } from "./scenes/game_starfall";
import { GameArkanoid } from "./scenes/game_arkanoid";
import { ScoreScene } from "./scenes/scoreScene";

const config : GameConfig = {
    title : "P3TS",
    width : 800,
    height : 600,
    parent : "game",
    scene : [
        WelcomeScene,
        GameArkanoid,
        GameStarfall,
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

export class Game extends Phaser.Game {
    constructor(config : GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new Game(config);
}