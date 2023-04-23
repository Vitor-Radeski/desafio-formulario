const inputText = document.querySelectorAll(".input-text");
const inputSubmit = document.getElementById("input-submit");

inputText.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.value !== "") {
      input.classList.add("input-checked");
    } else {
      input.classList.remove("input-checked");
    }
  });
});

inputSubmit.addEventListener("click", function () {
  inputText.forEach((input) => {
    if (input.value === "") {
      input.classList.add("input-not-checked");
      event.preventDefault();
    } else {
      input.classList.remove("input-not-checked");
    }
  });
});
