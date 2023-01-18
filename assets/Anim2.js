class Anim2 extends Phaser.Scene{
    constructor(){
        super("Anim2");
    }

    preload(){

        this.load.image('bk','assets/Background_2.png');
        this.load.image('yellow','assets/yellow.jpg');
        this.load.image('red','assets/red.jpg');
        this.load.image('blue','assets/blue.jpg');
        this.load.image('green','assets/green.jpg');
    }

    create(){

        this.add.image(500,400,'bk');
        this.yellow=this.physics.add.image(400,0,'yellow').setScale(0.3); 
        this.yellow.setVelocityY(50);

        this.red=this.physics.add.image(1025,800,'red').setScale(0.3); 
        this.red.setVelocityY(-50);

        this.blue=this.physics.add.image(10,10,'blue').setScale(0.3);
        this.blue.setVelocityX(50); 

        this.green=this.physics.add.image(1496,564,'green').setScale(0.3);
        this.green.setVelocityX(-50); 
    }

   
}