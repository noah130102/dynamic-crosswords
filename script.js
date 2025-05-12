const puzzleData = {
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
      3: "A Google AI model",
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

function createGrid() {
  // title at the top
  const title = document.getElementById("title");
  title.innerText = `${puzzleData.name ? puzzleData.name : ""}  Crossword`;

  const container = document.getElementById("crossword");
  const layout = puzzleData.layout;
  const clueNumbers = puzzleData.clueNumbers;

  container.innerHTML = ""; // Clear previous

  //   create grid logic
  for (let r = 0; r < layout.length; r++) {
    for (let c = 0; c < layout[0].length; c++) {
      const cell = document.createElement("div");
      cell.className = "cell";

      if (layout[r][c] === "") {
        cell.classList.add("black");
      } else {
        const input = document.createElement("input");
        input.maxLength = 1;
        input.dataset.row = r;
        input.dataset.col = c;
        cell.appendChild(input);

        const key = `${r},${c}`;
        if (clueNumbers[key]) {
          const number = document.createElement("div");
          number.className = "number";
          number.innerText = clueNumbers[key];
          cell.appendChild(number);
        }
      }

      container.appendChild(cell);
    }
  }
}

function loadClues() {
  // load clues in the ul list 
  const acrossList = document.getElementById("across-clues");
  const downList = document.getElementById("down-clues");

  acrossList.innerHTML = "";
  downList.innerHTML = "";

  for (const [num, clue] of Object.entries(puzzleData.clues.across)) {
    const li = document.createElement("li");
    li.innerText = `${num}. ${clue}`;
    acrossList.appendChild(li);
  }

  for (const [num, clue] of Object.entries(puzzleData.clues.down)) {
    const li = document.createElement("li");
    li.innerText = `${num}. ${clue}`;
    downList.appendChild(li);
  }
}

// Validate the answers by the user
function checkAnswers() {
  const inputs = document.querySelectorAll("input");
  let correct = 0;
  const layout = puzzleData.layout;

  inputs.forEach((input) => {
    const r = input.dataset.row;
    const c = input.dataset.col;
    const val = input.value.toUpperCase();
    if (val === layout[r][c]) {
        // correct answers
      input.style.backgroundColor = "#c8f7c5";
      correct++;
    } else {
      input.style.backgroundColor = "#f8d7da";
    }
  });

  if (correct === inputs.length) {
    alert("🎉 Congratulations! You completed the puzzle!");
  }else{
    alert("Try again!");
  }
}

// Initialize puzzle
createGrid();
loadClues();
