
// Example puzzle
const programmingTools = {
  name: "Programming Tools",
  layout: [
    ["", "", "", "", "", "V", "P", "N"],
    ["J", "A", "V", "A", "", "", "", ""],
    ["", "N", "U", "", "", "", "S", ""],
    ["", "G", "E", "M", "I", "N", "I", ""],
    ["", "U", "", "O", "", "", "G", ""],
    ["C", "L", "A", "N", "", "", "N", ""],
    ["", "A", "", "G", "", "", "A", ""],
    ["", "R", "I", "O", "T", "", "L", ""],
    ["", "", "", "", "", "", "S", ""],
  ],
  clueNumbers: {
    "0,5": 1,
    "1,0": 2,
    "3,1": 3,
    "5,0": 4,
    "7,1": 5,
    "1,1": 6,
    "1,2": 7,
    "3,3": 8,
    "2,6": 9,
  },
  clues: {
    across: {
      1: "Secure network connection",
      2: "A popular programming language used for web backend",
      3: "Gemini — A Google AI model",
      4: "A group or community",
      5: "Frontend library also used in web components",
    },
    down: {
      6: "A TypeScript-based web application framework",
      7: "A progressive JavaScript framework",
      8: "A NoSQL database",
      9: "Communication indicators or data points",
    },
  },
};

const puzzleData = {
  name: "Fruits",
  layout: [
    ["", "", "", "A", "", "", "", ""],
    ["", "", "", "P", "E", "A", "C", "H"],
    ["", "", "", "P", "", "", "", ""],
    ["", "", "P", "L", "U", "M", "", ""],
    ["", "M", "", "E", "", "", "", ""],
    ["", "A", "V", "O", "C", "A", "D", "O"],
    ["", "N", "", "", "", "", "A", ""],
    ["", "G", "", "", "", "", "T", ""],
    ["", "O", "", "", "", "", "E", ""],
  ],
  clueNumbers: {
    "1,3": 1,
    "3,2": 2,
    "5,1": 3,
    "0,3": 4,
    "4,1": 5,
    "5,4": 6,
  },
  clues: {
    across: {
      1: "hairy a bit has almondy from heart",
      2: "Small, sweet, purplish fruit",
      3: "Creamy green fruit often used in guacamole.",
    },
    down: {
      4: "keeps the doctor away",
      5: "sweet summer blessing",
      6: "Directly from gulf",
    },
  },
};
