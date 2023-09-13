[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ihfjUrzT)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11537042&assignment_repo_type=AssignmentRepo)
## MDDN 242 2023 Assignment 2


Documentation - Overlaps by Riley Campbell

My letters are made up of three squares, which can be rounded until they are circular, as well as a a line which can be split into two connected lines with an angle between them.

The twenty parameters per letter, split between each square and the lines:
  * `sizeC` : scale of the cyan square
  * `rotC` : rotation of the cyan square
  * `offsetCx` : x offset of the cyan square from the centre
  * `offsetCy` : y offset of the cyan square from the centre
  * `roundC` : roundness of the cyan square

  * `sizeM` : scale of the magenta square
  * `rotM` : rotation of the magenta square
  * `offsetMx` : x offset of the magenta square from the centre
  * `offsetMy` : y offset of the magenta square from the centre
  * `roundM` : roundness of the magenta square

  * `sizeY` : scale of the yellow square
  * `rotY` : rotation of the yellow square
  * `offsetYx` : x offset of the yellow square from the centre
  * `offsetYy` : y offset of the yellow square from the centre
  * `roundY` : roundness of the yellow square

  * `lineBaseX` : x offset of the start of the lines from the centre
  * `lineBaseY` : y offset of the start of the lines from the centre
  * `lineLength` : length of the lines
  * `linesAngle` : angle between the two lines
  * `linesRot` : rotation of the lines around the base location 

Development:

1.

My initial idea is to use the colours cyan, magenta and yellow, as overlapping squares with some transparency. This should create the colours red, green or blue in the overlaps. I'm not sure how much I'll need to manipulate the shapes in order for letters to be legible with this approach. The shapes may need to be more complex than squares, or there may need to be more than three.

2.

I found that I can use blendMode(MULTIPLY) to create the effect I want with the overlapping colours, creating red, green, blue and black in the overlaps rather than averaging the colour.

3.

I started creating my letters using just the three squares, each sqare with parameters for size, rotation, and location (x & y). This only uses 12 parameters out of the 20 parameter limit. Unfortunately my letters aren't clear at all. Not having access to a curves, triangles, rectangles, and circles, is extremely limiting. 

4.

I've decided to add another parameter to each square - corner rounding. Adding one value to a square will round the corners, where if the value is 0 the corners are sharp, and when the value is 100 it will turn the square into a circle. This should help with letters like: B, C, D, G, J, etc.

5.

Adding corner rounding has made creating the letters a lot easier, however, it still seems that they need another element to make them more readable. I would like the new element to be flexible while only using 5 parameters. My first thought is to create a sort of squiggly line, where the parameters would be: x position, y position, rotation, scale, number of curves. This way a line with a lot of curves would look fairly straight, while a line with 1 curve could be used for letters like U and V, and a line with 3 curves could be used for letters like M, and W.

6. 

Instead of creating a complex squiggly line, I've decided to set up something much simpler. My idea is to create a straight line and then redraw the line with a rotation to create a sort of angle. This will allow me to use the straight line where appropriate, or use V shapes for letters like M, V, and W. I can achieve this using the five parameters for: line start x position, line start y position, line length, angle between lines, and rotation for the whole shape.

7. 

I have implemented my lines into my letters and it makes them much more readable. Using it, I was able to complete the alphabet and all the numbers. In places the lines are required to create the shape at all, like for the numbers 6, 7, and 9.