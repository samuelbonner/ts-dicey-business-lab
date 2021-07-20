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
var dieArray = []; // Values added when die are added. Used in
var newDiceBtn = (document.getElementById("new-dice-button"));
var rerollDiceBtn = (document.getElementById("reroll-dice-button"));
var sumDiceBtn = (document.getElementById("sum-dice-button"));
var diceContainer = (document.getElementById("dice-container"));
//  DOM Functionality
newDiceBtn.addEventListener("click", function () {
    console.log("New Dice Button Clicked");
    new Die();
});
rerollDiceBtn.addEventListener("click", function () {
    console.log("Reroll Dice Button Clicked");
    dieArray.forEach(function (die) {
        die.rollNumber();
    });
});
sumDiceBtn.addEventListener("click", function () {
    var sum = 0;
    for (var i = 0; i < dieArray.length; i++) {
        sum += dieArray[i].value;
    }
    console.log("Sum Dice Button Clicked. Sum is " + sum);
    alert("Sum of All Dice is: " + sum);
});
// OOP Definition
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.value = Math.ceil(Math.random() * 6);
        this.die = document.createElement("div");
        this.die.className = "dice";
        this.rollNumber();
        // this.text = rollNumber;
        diceContainer.append(this.die);
        dieArray.push(this);
        this.die.addEventListener("click", function () {
            _this.rollNumber();
        });
        this.die.addEventListener("dblclick", function () {
            var i = dieArray.indexOf(_this);
            dieArray.splice(i, 1);
            _this.die.remove();
        });
    }
    Die.prototype.rollNumber = function () {
        var random1to6 = Math.ceil(Math.random() * 6);
        this.value = random1to6;
        dieText(this.value, this.die);
    };
    Die.prototype["delete"] = function () {
        this.remove();
    };
    return Die;
}());
var dieText = function (value, die) {
    // console.log(value)
    // console.log(die);
    var dieFace = "";
    if (value === 1) {
        dieFace = "&#9856";
        die.innerHTML = dieFace;
    }
    else if (value === 2) {
        dieFace = "&#9857";
        die.innerHTML = dieFace;
    }
    else if (value === 3) {
        dieFace = "&#9858";
        die.innerHTML = dieFace;
    }
    else if (value === 4) {
        dieFace = "&#9859";
        die.innerHTML = dieFace;
    }
    else if (value === 5) {
        dieFace = "&#9860";
        die.innerHTML = dieFace;
    }
    else if (value === 6) {
        dieFace = "&#9861";
        die.innerHTML = dieFace;
    }
};
