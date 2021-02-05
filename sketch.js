const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var count = 0;
var score = 0;
var turn = 0;
var play = 1;
var end = 2;
var gameState = play;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  
  ground = new Ground (240, 795, 480, 10);

 for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var l = 40; l <= width; l=l + 50){
    plinkos.push(new Plinko(l, 75));
  }

  for(var l = 15; l<= width - 10; l=l+50){
    plinkos.push(new Plinko(l, 175));
  }

  for(var l = 40; l<= width; l = l + 50){
    plinkos.push(new Plinko(l, 275));
  }
  for(var l = 15; l<= width; l = l + 50){
    plinkos.push(new Plinko(l, 375));
  } 

  

}

function draw() {
  Engine.update(engine);
  background(0);  
  
  ground.display();
  
  textSize(20);
  text("score:"+ score, 250, 30);

  text("600", 20, 515);
  text("300", 100, 515);
  text("100", 180, 515);
  text("50", 260, 515);
  text("250", 340, 515);
  text("500", 420, 515);

  if(particle != null){
    particle.display();

    if(particle.body.position.y > 480){
      if(particle.body.position.x < 60 && particle.body.position.x > 0){
        score = score + 600;
        particle = null;
        if(count >= 5){
          gameState = end;
        }
      }
    }
  }

  if(particle != null){
    particle.display();

    if(particle.body.position.y > 480){
      if(particle.body.position.x < 140 && particle.body.position.x > 60){
        score = score + 300;
        particle = null;
        if(count >= 5){
          gameState = end;
        }
      }
    }
  }

  if(particle != null){
    particle.display();

    if(particle.body.position.y > 480){
      if(particle.body.position.x < 220 && particle.body.position.x > 140){
        score = score + 100;
        particle = null;
        if(count >= 5){
          gameState = end;
        }
      }
    }
  }

  if(particle != null){
    particle.display();

    if(particle.body.position.y > 480){
      if(particle.body.position.x < 300 && particle.body.position.x > 220){
        score = score + 50;
        particle = null;
        if(count >= 5){
          gameState = end;
        }
      }
    }
  }

  if(particle != null){
    particle.display();

    if(particle.body.position.y > 480){
      if(particle.body.position.x < 380 && particle.body.position.x > 300){
        score = score + 250;
        particle = null;
        if(count >= 5){
          gameState = end;
        }
      }
    }
  }

  if(particle != null){
    particle.display();

    if(particle.body.position.y > 480){
      if(particle.body.position.x < 480 && particle.body.position.x > 380){
        score = score + 500;
        particle = null;
        if(count >= 5){
          gameState = end;
        }
      }
    }
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }
  for(var h = 0; h < plinkos.length; h++){
    plinkos[h].display();
  }
}

function mousePressed(){
  if(gameState!== end){
    count++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}