
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
        array = trim.map(el => el.trim());

        if (degree > 1) {
          let average = array.length / degree;

          if (parseInt(average) - average !== 0) {
            return alert("Please enter more values in the 'value' field for the selected 'rank' in the 'Create Tensor' section");
          }

          let nest = [];

          if (average > 0) {
            let counter = 0;

            while (counter < array.length) {
              let string = array.slice(counter, average + counter);
                if (datatype.value === "string") {
                  let join = string.slice();
                  nest += join.join(",").replaceAll(/\s*,\s*/g, '", "') + '"], ["';
                } else {
                    let join = string.slice();
                    nest += join.join(",").replaceAll(/\s*,\s*/g, ', ')  + '], [';
                }
                counter += average
            }

            if (datatype.value === "string") {
              string = nest.slice(0, -5).replace(/\s*,\s*/, ", ");
            } else {
                string = nest.slice(0, -4).replace(/\s*,\s*/, ", ");
            }
          } else {
              return alert("Please enter more values in the 'value' field for the selected 'rank' in the 'Create Tensor' section");
          }
        }
      }

      if (datatype.value === "string") {

      }

  }
}
