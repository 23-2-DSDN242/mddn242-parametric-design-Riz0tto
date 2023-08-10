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
  rectMode(RADIUS);

  // determine parameters for cyan square
  let sizeC = letterData["sizeC"];
  let rotC = letterData["rotC"];
  let posCx = 50  + letterData["offsetCx"];
  let posCy = 150 + letterData["offsetCy"];

  // draw three squares
  fill(cyan);
  rect(50, 80, 20);
  fill(magenta);
  rect(80, 100, 30);
  fill(yellow);
  rect(50, 40, 40);

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
