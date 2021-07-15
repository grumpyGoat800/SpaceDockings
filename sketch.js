var hasDocked = false

function preload(){
  issImage = loadImage("iss.png")
  spacebgImage = loadImage("spacebg.jpg")
  sc1Image = loadImage("spacecraft1.png")
  sc2Image = loadImage("spacecraft2.png")
  sc3Image = loadImage("spacecraft3.png")
  sc4Image = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  spaceCraft = createSprite(400, 200, 50, 50);
  spaceCraft.addImage(sc1Image)
  spaceCraft.scale = 0.2

  iss = createSprite(330,130,20,20)
  iss.addImage(issImage)
  iss.scale = 0.5

}

function draw() {
  background(spacebgImage); 
  
  if(!hasDocked){
  spaceCraft.x = spaceCraft.x+random(-1,1)
  }  

  if(keyDown("UP_ARROW")){
  spaceCraft.y = spaceCraft.y-2
  }

  if(keyDown("LEFT_ARROW")){
    spaceCraft.addImage(sc3Image)
    spaceCraft.x = spaceCraft.x-1
    }
    
    if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(sc4Image)
      spaceCraft.x = spaceCraft.x+1
      }
      
    if(keyDown("DOWN_ARROW")){
    spaceCraft.addImage(sc1Image)
    }
   
    if(spaceCraft.y <= (iss.y+70) && spaceCraft.x <= (iss.x-10)){
      hasDocked = true
      textSize(25)
      fill("white")
      text("DOCKING SUCCESSFUL", 200, 300)
    }
  drawSprites();
}
