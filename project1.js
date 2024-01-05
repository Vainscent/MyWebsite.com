document.addEventListener("DOMContentLoaded", function () {
  const homeButton = document.getElementById("home-button");
  const aboutButton = document.getElementById("about-button");
  const contactButton = document.getElementById("contact-button");
  const loginButton = document.getElementById("login-button");

  const homeSection = document.getElementById("home");
  const aboutSection = document.getElementById("about");
  const contactSection = document.getElementById("contact");
  const loginSection = document.getElementById("login");

  homeButton.addEventListener("click", function () {
    homeSection.style.display = "flex";
    aboutSection.style.display = "none";
    contactSection.style.display = "none";
    loginSection.style.display = "none";
  });

  aboutButton.addEventListener("click", function () {
    homeSection.style.display = "none";
    aboutSection.style.display = "flex";
    contactSection.style.display = "none";
    loginSection.style.display = "none";
  });

  contactButton.addEventListener("click", function () {
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    contactSection.style.display = "flex";
    loginSection.style.display = "none";
  });

  loginButton.addEventListener("click", function () {
    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    contactSection.style.display = "none";
    loginSection.style.display = "flex";
  });
});