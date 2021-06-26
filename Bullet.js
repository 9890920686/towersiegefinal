class Bullet {

constructor(){

        var options={'restitution':1,'density':1,'friction':1}
this.body=Bodies.rectangle(100,300,10,10,options)

this.width=50
this.height=50

World.add(world,this.body)

this.image=loadImage("polygon.png");

}
display(){

var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();



}



}