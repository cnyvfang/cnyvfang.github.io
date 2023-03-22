

const MAX_PARTICLE_COUNT = 70;
const MAX_TRAIL_COUNT = 30;

var colorScheme = ["#E69F66", "#DF843A", "#D8690F", "#B1560D", "#8A430A"];
var shaded = true;
var theShader;
var shaderTexture;
var trail = [];
var particles = [];



// start 
let model;
let predictionArr = [];

let canvas;
let vid
let capture;
let context;

let m;
let f_x;
let f_y;
let pf_x;
let pf_y;

const modelSettings = {
  flipHorizontal: true,
  maxNumBoxes: 3,
  iouThreshold: 0.5,
  scoreThreshold: 0.6
}

function runDetection() {
  model.detect(capture.elt).then(predictions => {
    predictionArr = predictions;
    //model.renderPredictions(predictions, canvas, context, capture.elt);
    if (capture) {
      requestAnimationFrame(runDetection);
    }
  });
}

// end


function preload() {
  theShader = new p5.Shader(this.renderer, vertShader, fragShader);
}


function setup() {
  
  
  f_x = -1;
  f_y = -1;
  pf_x = -1;
  pf_y = -1;
  
  pixelDensity(1);
  
  m = min(windowWidth, windowHeight);
  
  canvas = createCanvas(
    min(windowWidth, windowHeight), 
    min(windowWidth, windowHeight), 
    WEBGL).parent("canvas1");    
    
    
  capture = createCapture(VIDEO, function() {
    handTrack.load(modelSettings).then(lmodel => {
      model = lmodel;
      runDetection();
    });
  });
  context = canvas.elt.getContext("2d");
  capture.hide();
   

  canvas.canvas.oncontextmenu = () => false;  // Removes right-click menu.
  noCursor();
  
  shaderTexture = createGraphics(width, height, WEBGL);
  shaderTexture.noStroke();
}


function getHands(){

  
  predictionArr.forEach((item, i) => {
    // console.log(item);
    let w = item.bbox[2];
    let h = item.bbox[3];
    let x = item.bbox[0];
    let y = item.bbox[1];
    let centerX = x + w / 2;
    let centerY = y + h / 2;
    let score = item.score;
    let label = item.label;


    if (item.label == "o") {
      f_x = x;
      f_y = y;
    } 
  });
  
  return 
}


function draw() {
  background(0);
  noStroke();
    
  
  predictionArr.forEach((item, i) => {
    // console.log(item);
    let w = item.bbox[2];
    let h = item.bbox[3];
    let x = item.bbox[0];
    let y = item.bbox[1];
    let centerX = x + w / 2;
    let centerY = y + h / 2;
    let score = item.score;
    let label = item.label;


    if (item.label == "open") {
      f_x = x;
      f_y = y;
      
      f_x = map(f_x, 0, 320,0, m);
      f_y = map(f_y, 0, 320,0, m);
    } 
  });

  
    
  // Trim end of trail.
  trail.push([f_x, f_y]);
  
  let removeCount = 1;
  if (mouseIsPressed && mouseButton == CENTER) {
    removeCount++;
  }
  
  for (let i = 0; i < removeCount; i++) {
    if (trail.length == 0) {
      break;
    }
    
    if (mouseIsPressed || trail.length > MAX_TRAIL_COUNT) {
      trail.splice(0, 1);
    }
  }
  
  // Spawn particles.
  if (trail.length > 1 && particles.length < MAX_PARTICLE_COUNT) {
    let mouse = new p5.Vector(f_x, f_y);
    mouse.sub(pf_x, pf_y);
    if (mouse.mag() > 10) {
      mouse.normalize();
      particles.push(new Particle(pf_x, pf_y, mouse.x, mouse.y));
    }
  }
  
  pf_x = f_x;
  pf_y = f_y;
  
  translate(-width / 2, -height / 2);
  
  // Move and kill particles.
  for (let i = particles.length - 1; i > -1; i--) {
    particles[i].move();
    if (particles[i].vel.mag() < 0.1) {
      particles.splice(i, 1);
    }
  }
  
  if (shaded) {
    // Display shader.
    shaderTexture.shader(theShader);
    
    let data = serializeSketch();

    theShader.setUniform("resolution", [width, height]);
    theShader.setUniform("trailCount", trail.length);
    theShader.setUniform("trail", data.trails);
    theShader.setUniform("particleCount", particles.length);
    theShader.setUniform("particles", data.particles);
    theShader.setUniform("colors", data.colors);

    shaderTexture.rect(0, 0, width, height);
    texture(shaderTexture);
    
    rect(0, 0, width, height);
  } else {
    // Display points.
    stroke(255, 200, 0);
    for (let i = 0; i < particles.length; i++) {
      point(particles[i].pos.x, particles[i].pos.y);
    }
    
    stroke(0, 255, 255);
    for (let i = 0; i < trail.length; i++) {
      point(trail[i][0], trail[i][1]);
    }
  }
}

function mousePressed() {
  if (mouseButton == RIGHT) {
    shaded = !shaded;
  }
}

function serializeSketch() {
  data = {"trails": [], "particles": [], "colors": []};
  
  for (let i = 0; i < trail.length; i++) {
    data.trails.push(
      map(trail[i][0], 0, width, 0.0, 1.0),
      map(trail[i][1], 0, height, 1.0, 0.0));
  }
  
  for (let i = 0; i < particles.length; i++) {
    data.particles.push(
      map(particles[i].pos.x, 0, width, 0.0, 1.0), 
      map(particles[i].pos.y, 0, height, 1.0, 0.0),
      particles[i].mass * particles[i].vel.mag() / 100)

    let itsColor = colorScheme[particles[i].colorIndex];
    data.colors.push(red(itsColor), green(itsColor), blue(itsColor));
  }
  
  return data;
}
