let user = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let input = document.querySelector("input");

function valid(id) {
  if (id == "username") {
    if (user.value == "") {
      user.style.borderColor = "red";
    } else if (user.value[0].includes("<")) {
      user.style.borderColor = "red";
    } else if (user.value[0].includes(">")) {
      user.style.borderColor = "red";
    } else if (user.value[0].includes("$")) {
      user.style.borderColor = "red";
    } else if (user.value[0].includes("!")) {
      user.style.borderColor = "red";
    } else {
      user.style.borderColor = "green ";
    }
  } else if (id == "email") {
    if (email.value == "") {
      email.style.borderColor = "red";
    } else if (email.value[0] == "@") {
      email.style.borderColor = "red";
    } else if (email.value[0] == "<") {
      email.style.borderColor = "red";
    } else if (email.value[0] == ">") {
      email.style.borderColor = "red";
    } else if (email.value[0] == "$") {
      email.style.borderColor = "red";
    } else if (!email.value.includes("@")) {
      email.style.borderColor = "red";
    } else if (!email.value.includes(".com")) {
      email.style.borderColor = "red";
    } else {
      email.style.borderColor = "green";
    }
  } else if (id == "password") {
    if (password.value == "") {
      password.style.borderColor = "red";
    } else if (password.value.length < 8) {
      password.style.borderColor = "red";
    } else {
      password.style.borderColor = "green";
    }
  }
}
