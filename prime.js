const Submit = document.getElementById("btn");
const NumberInput = document.getElementById("input");

displayFirstNPrimeNumbers = N => {
  console.log("num", N);
  let arrayOfPrimeNumbers = [];
  let isPrimeNumber;
  let i = 0;
  while (arrayOfPrimeNumbers.length < N) {
    isPrimeNumber = true;
    if (i > 1) {
      for (var j = 2; j < i; j++) {
        console.log("i is", i + " j is", j);
        if (i % j === 0) {
          isPrimeNumber = false;
        }
      }
      if (isPrimeNumber == true) {
        arrayOfPrimeNumbers.push(i);
      }
    }
    i++;
  }
  console.log(arrayOfPrimeNumbers);
  printArray(arrayOfPrimeNumbers);
};

NumberInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    displayFirstNPrimeNumbers(NumberInput.value);
  }
});

Submit.addEventListener("click", function() {
  displayFirstNPrimeNumbers(NumberInput.value);
});

function printArray(arr) {
  let output = `<table><tr><td></td>`;
  arr.forEach(number => {
    output += `<td>${number}</td>`;
  });
  output += `</tr>`;

  arr.forEach(number => {
    output += `<tr><td>${number}</td>`;
    for (var i = 0; i < arr.length; i++) {
      output += `<td>${number * arr[i]}</td>`;
    }
    output += "</tr>";
  });
  output += `</table>`;
  document.getElementById("table").innerHTML = output;
}

//displayFirstNPrimeNumbers(Number);
