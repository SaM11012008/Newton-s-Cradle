class Bob{
    constructor(x,y,radius){
        var opt = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }

        this.body = Matter.Bodies.circle(x,y,radius,opt);
        this.radius = radius;

        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var radius = this.body.radius;
        push()
        translate(pos.x,pos.y);
        ellipseMode(radius);
        fill("red");
        circle(0,0,this.radius);
        pop()
    }

}
