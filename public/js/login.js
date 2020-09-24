$(document).ready(() => {
  // Getting references to our form and inputs
  const loginButton = $("#login-button");
  const signupButton = $("#signup-button");
  const emailInput = $("#email-input");
  const passwordInput = $("#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginButton.on("click", event => {
    event.preventDefault();
    validateInput(loginUser);
  });

  signupButton.on("click", event => {
    event.preventDefault();
    validateInput(signupUser);
  });

  function validateInput(next) {
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the next function and clear the form
    next(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  }

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(() => {
        window.location.assign("/");
        // If there's an error, log the error
      })
      .catch(handleLoginErr);
  }

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signupUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
