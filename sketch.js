
function preload(){
  sound = loadSound('bubbles.mp3');
}

function setup() {
  createCanvas(600, 600);
  sound.loop()
}

function draw() {
    let x1 = random(600);
    let x2 = random(600);
    let x3 = random(600);
    let y1 = random(600);
    let y2 = random(600);
    let y3 = random(600);
    let r = random(255);
    let g = random(255);
    let b = random(255);

    fill(r, g, b);
    triangle(x1, y1, x2, y2, x3, y3);
            


}


