document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const formData = new FormData(loginForm);
  
      let isFormValid = true;
      for (const value of formData.values()) {
        if (!value) {
          isFormValid = false;
          break;
        }
      }
  
      if (!isFormValid) {
        alert("Please fill in all fields");
      } else {
        const formValues = {};
        for (const [name, value] of formData) {
          formValues[name] = value;
        }
  
        console.log(formValues);
  
        loginForm.reset();
      }
    });
  });
  