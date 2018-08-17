let eda;
let seaworld;
let hero;
let food;
let foodX = 0;
let foodY = 0;
let enemyX = 0;
let enemyY = 0;
let x = 0;
let y = 0;
let dx = 5;
let dy = 5;
let health = 0;
let dhealth = 0;

function setup() {
  createCanvas(1023, 894);

  foodX = random(100, 700);
  foodY = random(100, 700);

  enemyX = random(400, 700);

  health = health + 20;
}

function preload() {
  // preload() runs once
  hero = loadImage("hero.png");
  food = loadImage("lig.jpg");
  eda = loadImage("eda.png");
  seaworld = loadImage("seaworld.jpg");
}

function draw() {
  background(seaworld);
  seaworld.resize(1023, 894);
  hero.resize(0, 200);
  image(hero, x, y);
  eda.resize(0, 170);
  //image(food, foodX, foodY);
  image(eda, foodX, foodY);
  noStroke();

  if (x > enemyX) {
    enemyX = enemyX + 1;
  } else if (x < enemyX) {
    enemyX = enemyX - 1;
  }
  if (y > enemyY) {
    enemyY = enemyY - 1;
  } else if (y < enemyY) {
    enemyY = enemyY + 1;
  }

  if (x > foodX - 100 && x < foodX + 50) {
    if (y > foodY - 100 && y < y + 50) {
      foodX = random(100, 700);
      foodY = random(100, 700);
      dhealth = dhealth + 20;
    }
  }

  if (health <= 0) {
    health = 0;
    textSize(50);
    text("проигрыш", 30, 400);
  } else {
    fill("#76FF00");
    if (health < 20) {
      fill(250);
    }

    health = 100 - (5 * millis()) / 1000 + dhealth;
    if (health > 100) {
      health = 100;
    }
    rect(width - 130, 30, health, 30);
  }
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    x = x + dx;
  } else if (keyCode == LEFT_ARROW) {
    x = x - dx;
  } else if (keyCode == DOWN_ARROW) {
    y = y + dy;
  } else if (keyCode == UP_ARROW) {
    y = y - dy;
  }
}
