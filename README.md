# 🧩 Interactive Crossword Puzzle Game

An interactive **Crossword Puzzle Game** powered by **HTML**, **CSS**, and **JavaScript**. This project generates crossword puzzles dynamically using structured data objects and lets users fill in answers based on fun clues — like fruits in this example!


## 🚀 Features

- 🔄 **Dynamic puzzle layout generation**
- 🧠 Input clues for both **across** and **down**
- ✍️ Interactive input cells
- 🖱️ Grid-based navigation for a smooth solving experience
- 💅 Fully styled and responsive layout

---

## 🧠 Dynamic Puzzle Logic

Crossword content is defined entirely using a JavaScript object — making the puzzle easy to customize or extend.

### ✅ Sample Puzzle Data

```javascript

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
