const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 80,
  "offsetx1": 0,
  "offsety1": 35,
  "offsetx2": 50,
  "offsety2": 10
}

const letterB = {
  "size": 150,
  "offsetx1": 0,
  "offsety1": -145,
  "offsetx2": 50,
  "offsety2": 10
}

const letterC = {
  "size": 100,
  "offsetx1": 30,
  "offsety1": 0,
  "offsetx2": 40,
  "offsety2": 0
}

const backgroundColor  = "#FFFFFF";
const strokeColor      = "#03045e";

const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  colorMode(HSB, 100);
  stroke(strokeColor);
  strokeWeight(0);
  blendMode(MULTIPLY);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx1"];
  let pos2y = posy + letterData["offsety1"];
  let pos3x = pos2x + letterData["offsetx2"];
  let pos3y = pos2y + letterData["offsety2"];

  // draw three squares
  fill(83, 100, 100, 75);
  rect(posx, posy, 150, 50);
  fill(50, 100, 100, 75);
  rect(pos2x, pos2y, size2, size2);
  fill(17, 100, 100, 75);
  rect(pos3x, pos3y, size2, size2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
