/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FFFFFF";
var systemLineColor = "#000000";
var systemBoxColor = "#FF0000";

/* internal constants */
const cyan = "#00FFFF";
const magenta = "#FF00FF";
const yellow = "#FFFF00";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  blendMode(MULTIPLY);       // creates the correct overlapping colours for cyan, magenta and yellow
  let shapeStrokeWeight = 0; // stroke around shapes

  // determine parameters for cyan square
  let sizeC = letterData["sizeC"];
  let rotC = letterData["rotC"];
  let posCx = 50  + letterData["offsetCx"];
  let posCy = 100 + letterData["offsetCy"];
  let roundC = letterData["roundC"];

  // determine parameters for magenta square
  let sizeM = letterData["sizeM"];
  let rotM = letterData["rotM"];
  let posMx = 50  + letterData["offsetMx"];
  let posMy = 100 + letterData["offsetMy"];
  let roundM = letterData["roundM"];

  // determine parameters for yellow square
  let sizeY = letterData["sizeY"];
  let rotY = letterData["rotY"];
  let posYx = 50  + letterData["offsetYx"];
  let posYy = 100 + letterData["offsetYy"];
  let roundY = letterData["roundY"];

  // determine parameters for line
  let lineBaseX = letterData["lineBaseX"];
  let lineBaseY = letterData["lineBaseY"];
  let lineLength = letterData["lineLength"];
  let linesAngle = letterData["linesAngle"];
  let linesRot = letterData["linesRot"];

  // draw three squares and a line
  rectMode(RADIUS); // simplifies rect drawing, since they will all be squares and not rectangles
  angleMode(DEGREES);
  
  // cyan square
  fill(cyan);
  push();
  translate(posCx, posCy);
  rotate(rotC);
  scale(sizeC);  
  strokeWeight(shapeStrokeWeight/sizeC);
  rect(0, 0, 1, 1, roundC/100);
  pop();

  // magenta square
  fill(magenta);
  push();
  translate(posMx, posMy);
  rotate(rotM);
  scale(sizeM);
  strokeWeight(shapeStrokeWeight/sizeM);
  rect(0, 0, 1, 1, roundM/100);
  pop();

  // yellow square
  fill(yellow);
  push();
  translate(posYx, posYy);
  rotate(rotY);
  scale(sizeY);
  strokeWeight(shapeStrokeWeight/sizeY);
  rect(0, 0, 1, 1, roundY/100);
  pop();

  // two connected lines, one rotated (allows the creation of v shape with only 5 parameters)
  
  push();

  strokeWeight(5);
  stroke(0);
  translate(50 + lineBaseX, 100 + lineBaseY);
  rotate(linesRot)

  line(0, 0, lineLength, 0); // line 1
  
  rotate(linesAngle);

  line(0, 0, lineLength, 0); // line 2, rotated by linesAnlge

  pop();

  strokeWeight(1);    // resets the stroke weight to 1
  rectMode(CORNER);   // resets rect mode so the bounding boxes are drawn correctly
  angleMode(RADIANS); // resets angle mode to radians
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  // cyan square
  new_letter["sizeC"]    = map(percent, 0, 100, oldObj["sizeC"], newObj["sizeC"]);
  new_letter["rotC"]    = map(percent, 0, 90, oldObj["rotC"], newObj["rotC"]);
  new_letter["offsetCx"] = map(percent, -100,  100, oldObj["offsetCx"], newObj["offsetCx"]);
  new_letter["offsetCy"] = map(percent, -100, 100, oldObj["offsetCy"], newObj["offsetCy"]);
  new_letter["roundC"]    = map(percent, 0, 100, oldObj["roundC"], newObj["roundC"]);

  // magenta square
  new_letter["sizeM"]    = map(percent, 0, 100, oldObj["sizeM"], newObj["sizeM"]);
  new_letter["rotM"]    = map(percent, 0, 90, oldObj["rotM"], newObj["rotM"]);
  new_letter["offsetMx"] = map(percent, -100,  100, oldObj["offsetMx"], newObj["offsetMx"]);
  new_letter["offsetMy"] = map(percent, -100, 100, oldObj["offsetMy"], newObj["offsetMy"]);
  new_letter["roundM"]    = map(percent, 0, 100, oldObj["roundM"], newObj["roundM"]);

  //yellow square
  new_letter["sizeY"]    = map(percent, 0, 100, oldObj["sizeY"], newObj["sizeY"]);
  new_letter["rotY"]    = map(percent, 0, 90, oldObj["rotY"], newObj["rotY"]);
  new_letter["offsetYx"] = map(percent, -100,  100, oldObj["offsetYx"], newObj["offsetYx"]);
  new_letter["offsetYy"] = map(percent, -100, 100, oldObj["offsetYy"], newObj["offsetYy"]);
  new_letter["roundY"]    = map(percent, 0, 100, oldObj["roundY"], newObj["roundY"]);

  // lines
  new_letter["lineBaseX"]    = map(percent, 0, 100, oldObj["lineBaseX"], newObj["lineBaseX"]);
  new_letter["lineBaseY"]    = map(percent, -100, 100, oldObj["lineBaseY"], newObj["lineBaseY"]);
  new_letter["lineLength"]    = map(percent, -100, 100, oldObj["lineLength"], newObj["lineLength"]);
  new_letter["linesAngle"]    = map(percent, 0, 90, oldObj["linesAngle"], newObj["linesAngle"]);
  new_letter["linesRot"]    = map(percent, 0, 90, oldObj["linesRot"], newObj["linesRot"]);

  return new_letter;
}

var swapWords = [
  "OVERLAPS",
  "01234567",
  "ABSTRACT"
]
