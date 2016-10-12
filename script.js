document.addEventListener('DOMContentLoaded', start);

function start() {
  var buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', getButton);

  }
}

var equation = "";
var result = 0;

function getButton(evt) {
  if (evt.target.id === "AC") {
    clearResult();
  } else if (evt.target.id === "CE") {
    clearLast();
  } else if (evt.target.id === "equals") {
    calculate();
  } else {
    equation += evt.target.value;
    console.log(equation);
    document.getElementById("equation").innerHTML = "<i>" + equation + "</i>";
  }
}

function calculate() {
  result= eval(equation);
  console.log(result);
  document.getElementById("result").innerHTML = "<p>" + result + "</p>";
}

function clearResult() {
  result = 0;
  equation = "";
  document.getElementById("result").innerHTML = "<p>" + equation + "</p>";
  document.getElementById("equation").innerHTML = "<i>0</i>";
}


function clearLast() {
  var last = equation[equation.length - 1];
  var operators = /[\/\+\-\*]/g;
  if (last === '+' || last === '-' || last === '/' || last==='*') {
    equation = equation.slice(0, equation.length -1);
    
  } else {
    var temp = equation.split(operators);
    console.log(temp);
    var lastElementLength = temp[temp.length-1].length;
    equation = equation.slice(0, equation.length - lastElementLength);
  }
  document.getElementById("equation").innerHTML = "<i>" + equation + "</i>";
}