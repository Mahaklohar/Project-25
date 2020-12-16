class Dustbin{
    constructor(x, y)
    {
        var option ={
            isStatic: true
        }

        this.image = loadImage("dustbingreen.png");

        this.base = Bodies.rectangle(x, y, 200, 10, option);
        this.width = 200;
        this.height = 10;      
        World.add(world, this.base);

        this.left = Bodies.rectangle(x - 95, y - 85, 10, 200, option);
        this.width = 10;
        this.height = 200;
        World.add(world, this.left);

        this.right = Bodies.rectangle(x + 95, y - 85, 10, 200, option);
        this.width = 10;
        this.height = 200;
        World.add(world, this.right);


    }
    display(){
        var bPos = this.base.position;
        var lPos = this.left.position;
        var rPos = this.right.position;
        
        push ()   
        fill("white");
        rect(lPos.x, lPos.y, 10, 200);       
        pop()

        push ()   
        fill("white");
        rect(rPos.x, rPos.y, 10, 200);
        pop()

        push ()           
        fill("White");
        rect(bPos.x, bPos.y, 200, 10);
        imageMode(CENTER);
        image(this.image, bPos.x, bPos.y-90,215, 215);
        pop()
        
    }
}