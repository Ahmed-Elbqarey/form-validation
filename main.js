let name = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let submit = document.getElementById("submit");

submit.onclick = function () {
  if (name.value[0] == name.value[0].toUpperCase()) {
    document.write("Valid UserName  ");
  } else {
    document.write("The First Later Of User Name Must Be UpperCase! ");
  }
  validEmail();
  validPass();
};

function validEmail() {
  if (email.value.indexOf("@") != -1) {
    document.write("Valid Email  ");
  } else {
    document.write("Not Valid Email! You Should Type @ ");
  }
}

function validPass() {
  pass = pass.value.toString();
  if (pass.length >= 8) {
    document.write("Valid Password");
  } else {
    document.write("Password Must be More Thane 8 Number!");
  }
}