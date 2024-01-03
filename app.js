//  Add functionality

function savePassword() {
  let password = document.getElementById('passwordInput').value;
  // do something with the password like store it or vslidate it
  console.log('Password saved:', password);
}

function validatePassword(password) {
  // password length should be atleast 8 characters
  if (password < 8) {
    return false;
  }
  // password should contain at least one digit
  if (!/\d/.test(password)) {
    return false;
  }

  // password should contain at least uppercase one letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  // password should contain at least one lowwercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }
  //  password should contain at least one special character
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) return false;
}
// if all criteria are met the password is considered valid
return true;

let userPassword = prompt('Please enter your password:');
if (validatePassword(userPassword)) {
  console.log('Password is valid!');
} else {
  console.log('Password is invalid');
}
