PImage eda; //<>//
PImage seaworld;
PImage hero;
PImage food;
float foodX, foodY, enemyX, enemyY;
int x, y;
int dx = 5;
int dy = 5;
int health, dhealth;

void setup() {
  size(1023, 894);
  hero = loadImage("hero.png");
  foodX = random(100, 700);
  foodY = random(100, 700);
  food = loadImage("lig.jpg");
  enemyX = random(400, 700);
  eda  = loadImage("eda.png");

  seaworld = loadImage("seaworld.jpg");
  health = health + 20 ;
}

void draw() {
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
  } else if (x < enemyX ) {
    enemyX = enemyX -  1;
  }
  if (y > enemyY) {
    enemyY = enemyY - 1;
  } else if (y < enemyY) {
    enemyY = enemyY + 1;
  }

  if (x > foodX- 100 && x < foodX + 50) {
    if (y > foodY - 100 && y < y + 50  ) {
      foodX = random (100, 700);
      foodY = random (100, 700);
      dhealth = dhealth + 20;
    }
  }

  if (health <= 0 ) {
    health = 0;
    textSize(50);
    text("проигрыш", 30, 400);
  } else {
    fill(#76FF00);
    if (health < 20) {
      fill(250);
    }

    health = 100 - 5 * millis() / 1000 + dhealth;
    if (health> 100 ) {
      health = 100;
    }
    rect(width - 130, 30, health, 30);
  }
}
void keyPressed() {
  if (keyCode == RIGHT) {
    x = x + dx;
  } else if (keyCode == LEFT ) {
    x = x - dx ;
  } else if (keyCode == DOWN ) {
    y = y + dy;
  } else if (keyCode == UP ) {
    y = y - dy;
  }
}