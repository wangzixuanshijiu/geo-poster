function setup() {  
createCanvas(800, 1000);   
noLoop();
}
function draw() {  
let bg1 = color(12, 16, 32);  
let bg2 = color(30, 22, 48);  
for(let y = 0; y < height; y++){    
let ratio = map(y, 0, height, 0, 1);    
stroke(lerpColor(bg1, bg2, ratio));    
line(0, y, width, y);  
}  
noStroke();
  push();  
translate(width/2, height * 0.3);  
fill(210, 165, 100, 130);  
circle(0,0,340);  
fill(12,16,32);  
circle(0,0,270);  
fill(180, 130, 220, 110);  
circle(0,0,200);  
fill(12,16,32);  
circle(0,0,130);  
fill(240, 200, 140, 140);  
circle(0,0,60);  
pop();
  push();  
translate(120, 560);  
fill(90, 140, 200, 140);  
beginShape();  
for(let i=0;i<8;i++){    
let ang = TWO_PI * i / 8;    
let r = 100;    
vertex(cos(ang)*r, sin(ang)*r);  
}  
endShape(CLOSE);  
pop();
  push();  
translate(680, 590);  
fill(225, 95, 110, 120);  
rotate(PI/7);  
beginShape();  
for(let i = 0; i < 5; i++){    
let angle = TWO_PI * (i * 2) / 5 - HALF_PI;    
let r = 90;    
vertex(cos(angle)*r, sin(angle)*r);  
}  
endShape(CLOSE);  
pop();
  push();  
translate(110,740);  
rotate(0.12);  
for(let i=0;i<9;i++){    
fill(255,255,255, map(i,0,8,40,100));    
rect(i*72, 0, 55, 16, 3);  
}  
pop();
  noFill();  
stroke(160, 190, 230, 100);  
strokeWeight(2.5);  
arc(width/2, height*0.82, 460, 220, PI, TWO_PI);
  noStroke();  
for(let i=0;i<35;i++){    
fill(255,255,255,random(50,160));    
let x = random(70, width-70);    
let y = random(70, height-80);    
circle(x,y,random(3,16));  
}
}