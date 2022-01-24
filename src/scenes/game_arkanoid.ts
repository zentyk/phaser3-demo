import "phaser";

export class GameArkanoid extends Phaser.Scene {
    gameOver : any;
    platform : any;
    cursors : any;
    ball : any;
    keyGame1 : any;
    keyGame2 : any;

    constructor() {
        super({key: "GameArkanoid"});
    }

    preload() {
        this.load.image("backgound","assets/game_arkanoid/background.png");
        this.load.image("gameover","assets/game_arkanoid/gameover.png");
        this.load.image("platform","assets/game_arkanoid/platform.png");
        this.load.image("ball","assets/game_arkanoid/ball.png");
    }

    create() {
        this.physics.world.setBoundsCollision(true, true, true, false);

        this.add.image(400,300,"backgound");
        this.gameOver = this.add.image(400,90,"gameover");
        this.gameOver.visible = false;

        this.platform = this.physics.add.image(400,460,'platform').setImmovable();
        this.platform.body.setAllowGravity(false);

        this.ball = this.physics.add.image(400,30,'ball');
        this.ball.body.setAllowGravity(true);
        this.ball.setBounce(1,1);
        this.ball.body.setAllowGravity(true);
        this.ball.setCollideWorldBounds(true);

        let velocity = 100 * Phaser.Math.Between(1.3,2);
        if(Phaser.Math.Between(0,10)>5) {
            velocity = 0 - velocity;
        }

        this.ball.setVelocity(velocity,200);

        this.physics.add.collider(this.ball,this.platform);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.keyGame1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        this.keyGame2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
    }

    update() {
        if(this.cursors.left.isDown) {
            this.platform.setVelocityX(-300);
        } else if(this.cursors.right.isDown) {
            this.platform.setVelocityX(300);
        }

        else {
            this.platform.setVelocityX(0);
        }

        if(this.cursors.left.isUp && this.cursors.right.isUp) {
            this.platform.setVelocityX(0);
        }

        if(this.ball.y>610) {
            this.scene.start("ScoreScene",{starsCaught : 10});
        }

        if(this.keyGame1.isDown){
            this.scene.start("GameArkanoid");
        }
        if(this.keyGame2.isDown){
            this.scene.start("GameStarfall");
        }
    }
}