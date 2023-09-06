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

  blendMode(MULTIPLY);
  strokeWeight(0);

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

  // draw three squares
  rectMode(RADIUS); // simplifies rect drawing, since they will all be squares and not rectangles
  angleMode(DEGREES);
  
  fill(cyan);
  push();
  translate(posCx, posCy);
  rotate(rotC);
  rect(0, 0, sizeC, sizeC, roundC);
  pop();

  fill(magenta);
  push();
  translate(posMx, posMy);
  rotate(rotM);
  rect(0, 0, sizeM, sizeM, roundM);
  pop();

  fill(yellow);
  push();
  translate(posYx, posYy);
  rotate(rotY);
  rect(0, 0, sizeY, sizeY, roundY);
  pop();

  rectMode(CORNER); // resets rect mode so the bounding boxes are drawn correctly
  angleMode(RADIANS);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
