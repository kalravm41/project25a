class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var rope_options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x : this.offsetX , y : this.offsetY}
        }
        this.rope = Constraint.create(rope_options);
        World.add(world,this.rope);

    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);

    

        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY)
    }
}