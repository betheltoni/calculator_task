let output = document.getElementById("outputScreen");


function display(number){
  output.value += number;
}

function calculate(){
  try {
    output.value = eval(output.value);
  } catch (e) {
    alert("invalid operation")
  }
}

function c(){
  output.value = "";
}

function del(){
  output.value = output.value.slice(0, -1);
}
