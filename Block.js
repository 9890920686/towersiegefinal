class Block {

    constructor(x, y) {

        var options = { 'restitution': 0, 'isStatic': false }

        this.body = Bodies.rectangle(x, y, 50, 50, options)

        this.visibility = 255;



        World.add(world, this.body)
    }

    display() {
        if (this.body.speed < 3) {

            var angle = this.body.angle;

            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER)

            fill("red");
            rect(0, 0, 50, 50)
            pop();
        }
        else{
            World.remove(world,this.body)
            this.visibility=this.visibility-5
        }


    }

    score() {
        if (this.visibility < 0 && this.visibility > -10) {
            score++

        }
    }

}








