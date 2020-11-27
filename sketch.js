var fixedrectangle;
var movingrectangle;



function setup() {

  createCanvas(800,400);

  fixedrectangle = createSprite(200,200,50,80);
  fixedrectangle.shapeColor="pink";


  movingrectangle = createSprite(400,200,80,30);
  movingrectangle.shapeColor="pink";
  




}

function draw() {
  background("lightblue");  


  movingrectangle.y=mouseY;
  movingrectangle.x=mouseX;
 
  if(movingrectangle.x-fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
    fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
    movingrectangle.y-fixedrectangle.y<fixedrectangle.width/2+movingrectangle.width/2&&
    fixedrectangle.y-movingrectangle.y<fixedrectangle.width/2+movingrectangle.width/2) {
    movingrectangle.shapeColor="green";
    fixedrectangle.shapeColor="green";
  }

  else{ movingrectangle.shapeColor="pink";
        fixedrectangle.shapeColor="pink";
    }




  drawSprites();
}