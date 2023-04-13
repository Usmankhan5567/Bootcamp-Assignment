let string = "0";
let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "AC") {
      string = "";
      document.getElementById("result").value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.slice(0, -1);
      document.getElementById("result").value = string;
    } else if (e.target.innerHTML === "=") {
      string = eval(string);
      document.getElementById("result").value = string;
    } else {
      console.log(e.target);
      if (string === "0") {
        string = e.target.innerHTML;
        document.getElementById("result").value = string;
      } else {
        string = string + e.target.innerHTML;
        document.getElementById("result").value = string;
      }
    }
  });
});