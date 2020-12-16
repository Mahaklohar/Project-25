class Paper{
    constructor(x, y, radius){

        var option ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(x, y, radius, option);
        this.radius = radius;
        this.image = loadImage("paper.png")
        World.add(world, this.body);      
    }

    display(){
        var pos = this.body.position;

        push()
        ellipseMode(RADIUS);
        fill ("LightGrey");
        strokeWeight(0)

        ellipse(pos.x, pos.y,this.radius, this.radius)
        
        imageMode (CENTER);
        image(this.image, pos.x, pos.y + 10, this.radius*2, this.radius*2)
        pop()


			
    } 


}