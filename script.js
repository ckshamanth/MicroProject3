const input = document.querySelector("input");
const resetBtn = document.querySelector(".resetBtn");
const delBtn = document.querySelector(".delBtn");
const calBtn = document.querySelector(".calBtn");

const btns = document.querySelectorAll(".btn");

let string = "";

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    string += e.target.innerText;

    // check if first value is operator
    const firstchar = string.charAt(0);
    if (firstchar == "+" || firstchar == "*" || firstchar == "/") {
      alert("Please enter a number first before using an operator.");
      string = "";
    }

    // update value to input screen
    input.value = string;
  });
});

delBtn.addEventListener("click", () => {
  const screenValue = input.value;
  string = screenValue.slice(0, screenValue.length - 1);

  // updating value to input screen
  input.value = string;
});

resetBtn.addEventListener("click", () => {
  string = "";

  // updating value to input screen
  input.value = string;
});

// Changing expression
function changeExpression(str) {
  return str.replace(/\x/g, "*");
}

// Checking last number
function checkingNum(str) {
  let lastChar = str[str.length - 1];
  if (
    lastChar === "+" ||
    lastChar === "x" ||
    lastChar === "/" ||
    lastChar === "-"
  ) {
    alert("Please don't end the input with an operator.");
    string = str.slice(0, str.length - 1); // Remove the last operator
    input.value = string; // Update input value
  }
}

calBtn.addEventListener("click", () => {
  // Check if the last character is an operator
  checkingNum(string);
  string = changeExpression(string);

  try {
    string = eval(string);

    if (String(string).includes(".")) {
      string = string.toFixed(2);
    }

    // updating value to input screen
    input.value = string;
  } catch (error) {
    alert("Invalid expression. Please check your input and try again.");
    string = "";
    input.value = string;
  }
});
