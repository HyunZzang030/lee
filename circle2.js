var b;
var w;
var h;
var ratio = 2;
var w_num = 5;
var h_num = 5;

function setup() {
  b = loadImage("circle.PNG");
  w = b.width * w_num * ratio;
  h = b.height * h_num * ratio;
  createCanvas(750,600);
  frameRate(30);
}

function draw() {
    if (mouseIsPressed==true){
    for(var y = 0; y < h; y+= b.height*ratio){
      for(var x = 0; x < w; x+= b.width*ratio){
        tint(random(255), random(255), random(255));
        image(b, x, y, b.width*ratio, b.height*ratio);
      }
    }
  }
}