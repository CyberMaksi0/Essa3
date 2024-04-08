document.addEventListener("DOMContentLoaded", function() {
    const decrementButton = document.querySelector('[data-action="decrement"]');
    const incrementButton = document.querySelector('[data-action="increment"]');
    const counterValueSpan = document.getElementById("value");
  
    let counterValue = 0;
    counterValueSpan.textContent = counterValue;
  
    decrementButton.addEventListener("click", function() {
      counterValue--;
      counterValueSpan.textContent = counterValue;
    });
  
    incrementButton.addEventListener("click", function() {
      counterValue++;
      counterValueSpan.textContent = counterValue;
    });
  });
  