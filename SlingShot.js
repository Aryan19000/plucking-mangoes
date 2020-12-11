class SlingShot{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 1
        }
        this.bodyA=bodyA
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA=body;
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
        var pointA=this.bodyA.position;
        var pointB=this.pointB;
        //stroke("black");
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}