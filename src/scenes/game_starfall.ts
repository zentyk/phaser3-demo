import "phaser";

export class GameStarfall extends Phaser.Scene {
    delta : number;
    lastStarTime : number = 0;
    starsCaught : number = 0;
    starsFallen : number = 0;
    sand : Phaser.Physics.Arcade.StaticGroup;
    info : Phaser.GameObjects.Text;
    keyGame1 : any;
    keyGame2 : any;

    constructor() {
        super({
            key: "GameStarfall"
        });
    }

    init(/*params: any*/) : void {
        this.delta = 10000;
        this.lastStarTime = 0;
        this.starsCaught = 0;
        this.starsFallen = 0;
    }
    
    preload() : void {
        this.load.setBaseURL("https://raw.githubusercontent.com/mariyadavydova/starfall-phaser3-typescript/master/");
        this.load.image("star", "assets/star.png");
        this.load.image("sand", "assets/sand.jpg");
    }
    
    create() : void {
        this.sand = this.physics.add.staticGroup({
            key: 'sand',
            frameQuantity: 20,
        });

        Phaser.Actions.PlaceOnLine(this.sand.getChildren(),new Phaser.Geom.Line(20, 580, 820, 580));

        this.sand.refresh();
        this.info = this.add.text(10,10,'',{ font : '24px Arial Bold', fill : '#FBFBAC' });

        this.keyGame1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        this.keyGame2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
    }
    
    update(time : number) : void {
        var diff : number = time - this.lastStarTime;
        if(diff>this.delta){
            this.lastStarTime = time;
            if(this.delta>500){
                this.delta -=20;
            }
            this.emitStar();
        }
        this.info.text = this.starsCaught + " caught - "+
        this.starsFallen + " fallen (max 3)";

        if(this.keyGame1.isDown){
            this.scene.start("GameArkanoid");
        }
        if(this.keyGame2.isDown){
            this.scene.start("GameStarfall");
        }
    }

    private onClick(star : Phaser.Physics.Arcade.Image) : () => void {
        return function () {
            star.setTint(0x00ff00);
            star.setVelocity(0, 0);
            //star.setPosition(Phaser.Math.Between(0,800),0);
            //star.setActive(false);
            //star.setVisible(false);
            this.starsCaught++;
            /*if(this.starsCaught === 3){
                this.scene.start("WinScene");
            }*/
            this.time.delayedCall(100, function(star){
                star.destroy();
            },[star],this);
        }
    }

    private onFall(star : Phaser.Physics.Arcade.Image) : () => void {
        return function(){
            star.setTint(0xff0000);
            this.starsFallen++;
            this.time.delayedCall(100, function(star){
                star.destroy();
                if(this.starsFallen > 2) {
                    this.scene.start("ScoreScene",{starsCaught : this.starsCaught});
                }
            },[star],this);
        }
    }

    private emitStar() : void {
        var star : Phaser.Physics.Arcade.Image;
        var x = Phaser.Math.Between(25,775);
        var y = 26;
        star = this.physics.add.image(x,y,'star');
        star.setDisplaySize(50,50);
        star.setVelocity(0,200);
        star.setInteractive();
        star.on('pointerdown', this.onClick(star),this);
        this.physics.add.collider(star,this.sand,this.onFall(star),null,this);
    }
}