const addInputButton = document.getElementById("addInput");
const inputContainer = document.getElementById("inputContainer");

addInputButton.addEventListener("click", () => {
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.placeholder = "Entrez une valeur";
  inputContainer.appendChild(newInput);
});

const compareButton = document.getElementById("compareButton");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

compareButton.addEventListener("click", () => {
  const value1 = input1.value;
  const value2 = input2.value;

  const allInputs = document.querySelectorAll("input[type='text']");
  allInputs.forEach((input) => {
    if (input.value === value2) {
      input.style.backgroundColor = "green";
    } else {
      input.style.backgroundColor = "red";
    }
  });
});
