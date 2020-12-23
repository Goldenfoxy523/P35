var dogNeutral

var dogHappy

var database

var foodS

var foodStock

function preload()
{
  
  dogNeutral = loadImage("images/dogImg.png");

  dogHappy = loadImage("images/dogImg1.png");
  
}

function setup() {
  
  createCanvas(500, 500);

  database = firebase.database();

  dog = createSprite(250,250,20,20);

  dog.addImage(dogNeutral);

  dog.scale = 0.1;

  

  foodStack=database.ref('Food');
    foodStack.on("value", readStock);
  
}


function draw() {

  background(46,139,87);

  if(keyWentUp(UP_ARROW)){

    writeStock(foodS);

    dog.addImage(dogHappy);

  }

  drawSprites();
  
  stroke("black");

  fill("white");

  textSize(20);

  text("food remaining "+foodS,150,150);

  text("Note : Press up arrow key to feed the dog", 50,50);
  

}

function readStock(data){

  foodS = data.val();

}

function writeStock(x){
  if(x<0){

    x=0;

  }
  else{

    x = x-1

  }
  database.ref('/').update({
    Food:x
  })

}



