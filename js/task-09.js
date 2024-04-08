document.addEventListener("DOMContentLoaded", function() {
    const widget = document.querySelector(".widget");
    const colorSpan = widget.querySelector(".color");
    const changeColorButton = widget.querySelector(".change-color");
  
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    }
    changeColorButton.addEventListener("click", function() {
      const randomColor = getRandomHexColor();
  
      document.body.style.backgroundColor = randomColor;
  
      colorSpan.textContent = randomColor;
    });
  });
  