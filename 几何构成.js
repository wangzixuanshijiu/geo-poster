// p5.js 抽象几何海报，多层复杂图形组合，静态美感
function setup() {
  createCanvas(800, 1000); // 海报尺寸 宽800，高1000
  background(20,24,35);
  noFill();
  strokeWeight(1);

  // 外圈大圆环组
  for(let r = 100; r < 400; r += 60){
    stroke(70,90,130,120);
    ellipse(width/2, height/2, r, r);
  }

  // 多边形嵌套
  push();
  translate(width/2, height/2);
  for(let i = 0; i < 7; i++){
    rotate(PI / 7);
    stroke(140,170,210,100);
    polygon(0,0,220,6);
  }
  pop();

  // 交叉斜线网格
  stroke(180,200,230,60);
  for(let x=120; x<680; x+=40){
    line(x,150,x+120,850);
    line(x+120,150,x,850);
  }

  // 散点小圆装饰
  for(let i=0;i<120;i++){
    let x = random(100,700);
    let y = random(100,900);
    fill(220,230,255,150);
    noStroke();
    circle(x,y,random(1,4));
  }

  // 中心几何块
  noFill();
  stroke(240,245,255,180);
  rect(width/2-80, height/2-80,160,160,8);
  triangle(width/2, height/2-110, width/2-95, height/2+60, width/2+95, height/2+60);
}

// 绘制正多边形函数
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function draw() {
  // 静态海报不需要持续渲染
  noLoop();
}
