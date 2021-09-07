class Cannon{
    constructor(x,y,angle){
        this.x=x;
        this.y=y;
        this.angle=angle;
        this.cannonImg=loadImage("assets/CANON.png")

    }
    display(){
        if(keyIsDown(RIGHT_ARROW) && this.angle<=81){
            this.angle+=1;
        }
        if(keyIsDown(LEFT_ARROW) && this.angle>=-58){
            this.angle-=1;
        }

        push()
        translate(this.x,this.y)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.cannonImg, 0 , 0, 130,100)
        pop()
    }
}