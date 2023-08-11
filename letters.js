const alphabet = {
  "default": {
    "sizeC": 20,
    "rotC": 0,
    "offsetCx": -10,
    "offsetCy": -10,
    "sizeM": 20,
    "rotM": 45,
    "offsetMx": 0,
    "offsetMy": 0,
    "sizeY": 20,
    "rotY": 0,
    "offsetYx": 10,
    "offsetYy": 10
  }
  ,
  "A": {
    "sizeC": 31,
    "rotC": 150,
    "offsetCx": -8,
    "offsetCy": 0,
    "sizeM": 31,
    "rotM": 210,
    "offsetMx": 8,
    "offsetMy": 0,
    "sizeY": 20,
    "rotY": 0,
    "offsetYx": 0,
    "offsetYy": 22
  },
  "B": {
    "sizeC": 25,
    "rotC": 45,
    "offsetCx": 0,
    "offsetCy": -20,
    "sizeM": 25,
    "rotM": 45,
    "offsetMx": 0,
    "offsetMy": 20,
    "sizeY": 20,
    "rotY": 0,
    "offsetYx": -15,
    "offsetYy": 0
  },
  "C": {
    "sizeC": 35,
    "rotC": 45,
    "offsetCx": 0,
    "offsetCy": 0,
    "sizeM": 30,
    "rotM": 45,
    "offsetMx": 6,
    "offsetMy": 0,
    "sizeY": 25,
    "rotY": 45,
    "offsetYx": 12,
    "offsetYy": 0
  },
  "D": {
    "sizeC": 25,
    "rotC": 10,
    "offsetCx": 5,
    "offsetCy": 0,
    "sizeM": 35,
    "rotM": 0,
    "offsetMx": 0,
    "offsetMy": 0,
    "sizeY": 25,
    "rotY": 80,
    "offsetYx": 5,
    "offsetYy": 0
  },
  "E": {
    "sizeC": 25,
    "rotC": 0,
    "offsetCx": 5,
    "offsetCy": 15,
    "sizeM": 30,
    "rotM": 0,
    "offsetMx": 0,
    "offsetMy": 0,
    "sizeY": 25,
    "rotY": 0,
    "offsetYx": 5,
    "offsetYy": -15
  },
  "F": {
    "sizeC": 20,
    "rotC": 0,
    "offsetCx": 10,
    "offsetCy": 0,
    "sizeM": 30,
    "rotM": 0,
    "offsetMx": 0,
    "offsetMy": -10,
    "sizeY": 25,
    "rotY": 0,
    "offsetYx": 5,
    "offsetYy": 0
  },
  // "G": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "H": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "I": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "J": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "K": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "L": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "M": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "N": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "O": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "P": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "Q": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "R": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "S": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "T": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "U": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "V": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "W": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "X": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "Y": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "Z": {
  //   "size": 50,
  //   "offsetx": 15,
  //   "offsety": 0
  // },
  // "0": {
  //   "size": 40,
  //   "offsetx": 0,
  //   "offsety": 17
  // },
  // "1": {
  //   "size": 40,
  //   "offsetx": 0,
  //   "offsety": 17
  // },
  // "2": {
  //   "size": 40,
  //   "offsetx": 0,
  //   "offsety": 17
  // },
  // "3": {
  //   "size": 40,
  //   "offsetx": 0,
  //   "offsety": 17
  // },
  // "4": {
  //   "size": 40,
  //   "offsetx": 0,
  //   "offsety": 17
  // },
  // "5": {
  //   "size": 40,
  //   "offsetx": 0,
  //   "offsety": 17
  // },
  // "6": {
  //   "size": 40,
  //   "offsetx": 0,
  //   "offsety": 17
  // },
  // "7": {
  //   "size": 40,
  //   "offsetx": 0,
  //   "offsety": 17
  // },
  // "8": {
  //   "size": 40,
  //   "offsetx": 0,
  //   "offsety": 17
  // },
  // "9": {
  //   "size": 40,
  //   "offsetx": 0,
  //   "offsety": 17
  // }

}