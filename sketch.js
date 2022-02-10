var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, car3, car4, fuels, powerCoins, obstacles;
var cars = [];
var blastImg;
var nail;

function preload() {
  backgroundImage = loadImage("./assets/Grass.jpeg");
  car1_img = loadImage("CycleRacer1.png");
  car2_img = loadImage("CycleRacer4.png");
  
  track = loadImage("Road.png");
  fuelImage = loadImage("./assets/tyre.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/nail.png");
  lifeImage = loadImage("./assets/life.png");
  blastImg = loadImage("./assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
