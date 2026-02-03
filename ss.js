let countA = 0;
let countB = 0;
let countC = 0;

function vote() {
  let selected = document.querySelector('input[name="candidate"]:checked');
  let message = document.getElementById("message");

  if (selected === null) {
    message.textContent = "Please select a candidate!";
    message.style.color = "red";
    return;
  }

  if (selected.value === "A") {
    countA++;
    document.getElementById("countA").textContent = countA;
  }

  if (selected.value === "B") {
    countB++;
    document.getElementById("countB").textContent = countB;
  }

  if (selected.value === "C") {
    countC++;
    document.getElementById("countC").textContent = countC;
  }

  message.textContent = "Thank you for voting!";
  message.style.color = "green";

  selected.checked = false;
}