var img; 
var yellowX=0, yellowY=0; 
var redX=0, redY=0; 
var grayX=0, grayY=0; 
var blueX=0, blueY=0; 
var button=0;  
 
function setup() {
  createCanvas(500,680); 
  img=loadImage("rect.jpg"); 
  image(img,0,0,500,680); 
}  
 
function draw() {
  fill(211,211,211); 
  ellipse(250,340,550,750); 
    
  //yellow 
  fill(255,226,118); 
  strokeWeight(3); 
  rect(yellowX+230,yellowY+350,180,120); 
  rect(yellowX+75,yellowY+155,40,25); 
  rect(yellowX+430,yellowY+370,45,35); 
  rect(yellowX+40,yellowY+270,80,80); 
  rect(yellowX+230,yellowY+350,180,140); 
   
  strokeWeight(5); 
  rect(yellowX+220,yellowY+150,105,85); 
  rect(yellowX+220,yellowY+136,35,40); 
  rect(yellowX+218,yellowY+175,38,42); 
  rect(yellowX+180,yellowY+182,37,30); 
  rect(yellowX+220,yellowY+430,60,60); 
  rect(yellowX+340,yellowY+520,80,70);    
    
  //red 
  fill(255,203,238); 
  strokeWeight(5); 
  rect(redX+158,redY+140,20,70); 
  rect(redX+325,redY+150,110,60); 
  rect(redX+390,redY+370,40,100); 
   
  strokeWeight(3); 
  rect(redX+187,redY+83,30,55); 
  rect(redX+93,redY+157,25,65); 
  rect(redX+220,redY-5,60,150); 
  rect(redX+120,redY+245,55,45); 
  rect(redX+450,redY+175,33,195); 
  rect(redX+93,redY+220,25,40); 
  rect(redX+40,redY+420,90,60); 
  rect(redX+130,redY+450,65,35); 
  rect(redX+370,redY+510,80,40); 
   
  //gray 
  fill(201,201,201); 
  strokeWeight(3); 
  rect(grayX+122,grayY+200,95,10); 
  rect(grayX+112,grayY+112,30,25); 
  rect(grayX+120,grayY+60,65,50); 
  rect(grayX+437,grayY+170,25,80); 
  rect(grayX+485,grayY+260,30,80); 
  rect(grayX+93,grayY+260,25,30); 
  rect(grayX+70,grayY+350,40,80); 
  rect(grayX+195,grayY+450,40,35); 
  rect(grayX+140,grayY+485,80,50); 
    
  strokeWeight(5); 
  rect(grayX+255,grayY+150,35,65); 
  rect(grayX+170,grayY+130,45,50); 
  rect(grayX+177,grayY+250,25,30); 
  rect(grayX+380,grayY+275,40,45); 
  rect(grayX+120,grayY+210,25,35); 
  rect(grayX+45,grayY+225,50,45); 
  rect(grayX+130,grayY+300,60,20); 
  rect(grayX+150,grayY+350,30,60); 
       
  //blue 
  fill(126,196,245); 
  strokeWeight(5); 
  rect(blueX+228,blueY+262,30,67); 
  rect(blueX+383,blueY+150,35,55); 
  rect(blueX+240,blueY+66,22,82); 
  rect(blueX+410,blueY+310,38,60); 
   
  strokeWeight(3); 
  rect(blueX+228,blueY+370,29,57); 
  rect(blueX+222,blueY+238,105,20); 
  rect(blueX+150,blueY+413,50,35); 
  rect(blueX+120,blueY+150,36,50); 
  rect(blueX+70,blueY+310,25,40); 
  rect(blueX+20,blueY+370,50,70); 
   
  //button 
  fill(255,226,118); 
  rect(20,20,20,20); 
  fill(0,0,0); 
  text("Y",27,35); 
   
  fill(255,203,238); 
  rect(20,43,20,20); 
  fill(0,0,0); 
  text("R",27,58); 
   
  fill(201,201,201); 
  rect(20,66,20,20); 
  fill(0,0,0); 
  text("G",27,81); 
  
  fill(126,196,245); 
  rect(20,89,20,20); 
  fill(0,0,0); 
  text("B",27,104); 
    
  if (mouseIsPressed) { 
    if(mouseX>=20 && mouseX<=40){ 
      if(mouseY>=20 && mouseY<=40){ 
        //yellow 0 
        button=0; 
      } 
      else if(mouseY>=43 && mouseY<=63){ 
        //red 1 
        button=1; 
      } 
      else if(mouseY>=66 && mouseY<=86){ 
        //gray 2 
        button=2; 
      } 
      else if(mouseY>=89 && mouseY<=109){ 
        //blue 3 
        button=3; 
      } 
    } 
  } 
  print(mouseIsPressed); 
}  
 
function keyPressed() { 
  if (key === CODED) { 
    if(button===0){ 
      switch(keyCode){ 
        case UP: yellowY-=3;break; 
        case DOWN : yellowY+=3;break; 
        case LEFT : yellowX-=3; break; 
        case RIGHT : yellowX+=3; break; 
      } 
    } 
    else if(button===1){ 
      switch(keyCode){ 
        case UP: redY-=3;break; 
        case DOWN : redY+=3;break; 
        case LEFT : redX-=3; break; 
        case RIGHT : redX+=3; break; 
      } 
    } 
    else if(button===2){ 
      switch(keyCode){ 
        case UP: grayY-=3;break; 
        case DOWN : grayY+=3;break; 
        case LEFT : grayX-=3; break; 
        case RIGHT : grayX+=3; break; 
      } 
    } 
    else if(button===3){ 
      switch(keyCode){ 
        case UP: blueY-=3;break; 
        case DOWN : blueY+=3;break; 
        case LEFT : blueX-=3; break; 
        case RIGHT : blueX+=3; break; 
      } 
    } 
  } 
} 