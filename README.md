[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ihfjUrzT)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11537042&assignment_repo_type=AssignmentRepo)
## MDDN 242 2023 Assignment 2

(Replace this README with information about your alphabet. This is an example.)

Each of my letters is composed with two circles. The size and position of the first circle is fixed, but the location and size of the second circle is controlled by three parameters.

The three parameters per letter:
  * `size` : radius of the second circle
  * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one


My initial idea is to use the colours cyan, magenta and yellow, as overlapping squares with some transparency. This should create the colours red, green or blue in the overlaps. I'm not sure how much I'll need to manipulate the shapes in order for letters to be legible with this approach. The shapes may need to be more complex than squares, or there may need to be more than three.

I found that I can use blendMode(MULTIPLY) to create the effect I want with the overlapping colours, making them create RGB in the overlaps rather than averaging the colour.
