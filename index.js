const toggle = document.getElementById("themeToggle");
const body = document.body;
const navLinks = document.querySelectorAll("nav ul li a");
const form = document.querySelector("form"); 
const map = document.querySelector(".map iframe");  
const socialLinks = document.querySelectorAll(".social a");
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.style.background = "#f8fafc";
    body.style.color = "#111";
    navLinks.forEach(link => link.style.color = "#111");
  } else {
    body.style.background = "#0b1220";
    body.style.color = "#fff";
    navLinks.forEach(link => link.style.color = "#fff");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Form submitted successfully!");
  form.reset();
});
