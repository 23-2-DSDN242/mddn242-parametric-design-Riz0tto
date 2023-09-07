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
  scale(sizeC);
  rect(0, 0, 1, 1, roundC/100);
  pop();

  fill(magenta);
  push();
  translate(posMx, posMy);
  rotate(rotM);
  scale(sizeM);
  rect(0, 0, 1, 1, roundM/100);
  pop();

  fill(yellow);
  push();
  translate(posYx, posYy);
  rotate(rotY);
  scale(sizeY);
  rect(0, 0, 1, 1, roundY/100);
  pop();

  rectMode(CORNER); // resets rect mode so the bounding boxes are drawn correctly
  angleMode(RADIANS);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["sizeC"]    = map(percent, 0, 100, oldObj["sizeC"], newObj["sizeC"]);
  new_letter["rotC"]    = map(percent, 0, 90, oldObj["rotC"], newObj["rotC"]);
  new_letter["offsetCx"] = map(percent, -50,  50, oldObj["offsetCx"], newObj["offsetCx"]);
  new_letter["offsetCy"] = map(percent, -100, 100, oldObj["offsetCy"], newObj["offsetCy"]);
  new_letter["roundC"]    = map(percent, 0, 100, oldObj["roundC"], newObj["roundC"]);
  new_letter["sizeM"]    = map(percent, 0, 100, oldObj["sizeM"], newObj["sizeM"]);
  new_letter["rotM"]    = map(percent, 0, 90, oldObj["rotM"], newObj["rotM"]);
  new_letter["offsetMx"] = map(percent, -50,  50, oldObj["offsetMx"], newObj["offsetMx"]);
  new_letter["offsetMy"] = map(percent, -100, 100, oldObj["offsetMy"], newObj["offsetMy"]);
  new_letter["roundM"]    = map(percent, 0, 100, oldObj["roundM"], newObj["roundM"]);
  new_letter["sizeY"]    = map(percent, 0, 100, oldObj["sizeY"], newObj["sizeY"]);
  new_letter["rotY"]    = map(percent, 0, 90, oldObj["rotY"], newObj["rotY"]);
  new_letter["offsetYx"] = map(percent, -50,  50, oldObj["offsetYx"], newObj["offsetYx"]);
  new_letter["offsetYy"] = map(percent, -100, 100, oldObj["offsetYy"], newObj["offsetYy"]);
  new_letter["roundY"]    = map(percent, 0, 100, oldObj["roundY"], newObj["roundY"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
