class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 475
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }

    fly()
    {
        this.Rope.bodyA = null;
    }

    attach(bodyA)
    {
        this.Rope.bodyA = bodyA;
    }

    display(){
        if(this.Rope.bodyA)
        {
          var pointA = this.Rope.bodyA.position;
          var pointB = this.pointB;
          strokeWeight(4);
          line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}