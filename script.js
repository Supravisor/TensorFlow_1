
// Create Tensor
let variable = document.getElementById("variable");
let value = document.getElementById("value");
let datatype = document.editor.datatype;
let rank = document.getElementById("rank");

const tensor = stat => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'Create Tensor' section");
  } else if (value.value === "") {
      return alert("Please enter a value in the 'Create Tensor' section");
  }
}
