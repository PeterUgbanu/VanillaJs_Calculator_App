const output = document.getElementById("output");
const digits = document.getElementsByClassName("num");
const equals = document.getElementById("equals");
const clear = document.querySelector("button");

let value = "";

const setValue = (val) => {
  value = val;
};

const setOutput = (str) => {
  output.value = str;
};

for (i = 0; i < digits.length; i++) {
  let button = digits[i];
  button.addEventListener("click", () => {
    value += button.value;
    setOutput(value);
  });
}

output.addEventListener("mouseover", function func() {
  output.focus();
});

clear.addEventListener("click", () => {
  setOutput("");
  setValue("");
});

equals.addEventListener("click", function calculate() {
  let arr = output.value.split(" ");
  const str = arr[1];
  setOutput("");
  let out;
  if (str == "+") {
    out = parseFloat(arr[0]) + parseFloat(arr[2]);
  } else if (str == "-") {
    out = parseFloat(arr[0]) - parseFloat(arr[2]);
  } else if (str == "*") {
    out = parseFloat(arr[0]) * parseFloat(arr[2]);
  } else {
    out = parseFloat(arr[0]) / parseFloat(arr[2]);
  }

  setOutput(out);
  setValue("");
});
