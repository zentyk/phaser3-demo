import "phaser";
import { WelcomeScene } from "./scenes/welcomeScene";
import { main_map } from "./scenes/main_map";
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
        main_map,
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
    backgroundColor : "#000FFF"
};

export class Game extends Phaser.Game {
    constructor(config : GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new Game(config);
}