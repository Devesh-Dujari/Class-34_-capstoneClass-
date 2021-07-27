const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2, box3, box4, box5, box6;
var ball;
var rope;

function setup()
{
    createCanvas(2500, 800);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 600, 1100, 20);

    box1 = new Box(900, 100, 70, 70);
    box2 = new Box(900, 100, 70, 70);
    box3 = new Box(900, 100, 70, 70);
    box4 = new Box(800, 100, 70, 70);
    box5 = new Box(800, 100, 70, 70);
    box6 = new Box(700, 100, 70, 70);

    ball = new Ball(200, 200, 80, 80);

    rope = new Rope(ball.body, {x:550, y:50});
}

function draw()
{
    background(0);

    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    ball.display();

    rope.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}

/*function mouseReleased()
{
    rope
}*/