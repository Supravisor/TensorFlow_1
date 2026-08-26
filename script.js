
// Create Tensor
let variable = document.getElementById("variable");
let value = document.getElementById("value");
let datatype = document.editor.datatype;
let rank = document.getElementById("rank");

const tensor = stat => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Create Tensor' section");
  } else if (value.value === "") {
    return alert("Please enter a value in the 'value' field, in the 'Create Tensor' section");
  } else {
      let keepOne = "";
      let keepTwo = "";
      let degree = Math.floor(rank.value);
      let array = [];
      let string = value.value;
      let bracket = 0;

      if (value.value.includes(",")) {
        let trim = value.value.split(/\s*,\s*/);

      }

  }
}
