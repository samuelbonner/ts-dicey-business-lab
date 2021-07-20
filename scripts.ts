/*
Pseudocode/Logic:
1. Page loads with tree different buttons, each with unique actions.
    a. New Dice: This instances a new dice object from a class and places the object in the dice <div>.
    b. Reroll: This regenerates all existing dice with new random numbers
    c. Sum: This totals the existing sum of all dice displayed.
        Alert would be the easiest path here, but it'd be nice to have this display near the sum button or somewhere cleaner looking.
    d. Maybe add in a "Clear" button as well to clear all dice & the sum?
2. The dice themselves also have 2 functionalities:
    a. Click: Rerolls the dice (and updates the total sum)
    b. Double-click: Removes the dice (and removes it from the total sum)


So, we want a class of dice.
    We want the dice to have a functionality of rollNumber (or w/e) and that should happen upon the dice being instanced.
        That functionality should also be tied into the dice's click AddEventListener
    I think the dice should also have a functionality of deletion.
        That functionality should be tied into double-click AddEventListener


*/

/*
Wishlist:
    * Add 'Clear' button (removes all dice from container & array)
    * Add Auto-Sum button & functionality
*/

//   Global Variable Declaration
let dieArray: Die[] = []; // Values added when die are added. Used in

const newDiceBtn = <HTMLButtonElement>(
  document.getElementById("new-dice-button")
);
const rerollDiceBtn = <HTMLButtonElement>(
  document.getElementById("reroll-dice-button")
);
const sumDiceBtn = <HTMLButtonElement>(
  document.getElementById("sum-dice-button")
);
const diceContainer = <HTMLButtonElement>(
  document.getElementById("dice-container")
);

//  DOM Functionality

newDiceBtn.addEventListener("click", () => {
  console.log("New Dice Button Clicked");
  new Die();
});

rerollDiceBtn.addEventListener("click", () => {
  console.log("Reroll Dice Button Clicked");
  dieArray.forEach((die) => {
    die.rollNumber();
  });
});

sumDiceBtn.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < dieArray.length; i++) {
    sum += dieArray[i].value;
  }
  console.log(`Sum Dice Button Clicked. Sum is ${sum}`);
  alert(`Sum of All Dice is: ${sum}`);
});

// OOP Definition
class Die {
  die: HTMLDivElement;
  value: number;

  constructor() {
    this.value = Math.ceil(Math.random() * 6);
    this.die = document.createElement("div");
    this.die.className = "dice";
    this.rollNumber();
    // this.text = rollNumber;
    diceContainer.append(this.die);
    dieArray.push(this);

    this.die.addEventListener("click", () => {
      this.rollNumber();
    });

    this.die.addEventListener("dblclick", () => {
      let i = dieArray.indexOf(this);
      dieArray.splice(i, 1);
      this.die.remove();
    });
  }

  rollNumber() {
    let random1to6: number = Math.ceil(Math.random() * 6);
    this.value = random1to6;
    dieText(this.value, this.die);
  }

  // This function isn't even called on the dblclick eventlistener above currently
  delete() {
    this.die.remove();
  }
}

let dieText = (value : number, die: HTMLDivElement) => {
  // console.log(value)
  // console.log(die);
  let dieFace = "";
  if (value === 1) {
    dieFace = "&#9856";
    die.innerHTML = dieFace;
  } else if (value === 2) {
    dieFace = "&#9857";
    die.innerHTML = dieFace;
  } else if (value === 3) {
    dieFace = "&#9858";
    die.innerHTML = dieFace;
  } else if (value === 4) {
    dieFace = "&#9859";
    die.innerHTML = dieFace;
  } else if (value === 5) {
    dieFace = "&#9860";
    die.innerHTML = dieFace;
  } else if (value === 6) {
    dieFace = "&#9861";
    die.innerHTML = dieFace;
  }
};
