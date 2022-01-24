import "phaser";
export class WelcomeScene extends Phaser.Scene {
    title : Phaser.GameObjects.Text;
    hint : Phaser.GameObjects.Text;
    madeBy : Phaser.GameObjects.Text;

    constructor() {
        super({
            key: "WelcomeScene"
        });
    }

    create () : void {
        var titleText : string = "Starfall";
        this.title = this.add.text(150,200,titleText, {
            font : '128PX Arial Bold',
            fill : '#FBFBAC'
        });
        var hintText : string = "Click to start";
        this.hint = this.add.text(300,350,hintText, {
            font : '24PX Arial Bold',
            fill : '#FBFBAC'
        });

        let madeByText : string = "Made by @zentykdev";
        this.madeBy = this.add.text(250,570,madeByText, {font:'24px ArialBold',fill:'#FFFFFF'})


        this.input.on('pointerdown', () => {
            this.scene.start("MainMap");
        },this);
    }
}