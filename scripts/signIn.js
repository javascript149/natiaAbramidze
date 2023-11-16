function signInHandler(event) {
  event.preventDefault();

  let email = document.getElementById("email").value; 
  let password = document.getElementById("password").value;
  let remember = document.getElementById("remember").checked;

  let dataFromDb = localStorage.getItem("usersData");
  if (!dataFromDb) {
    alert("Incorrect username or password");
    return;
  }

  if (!email) {
    alert("Email is not correct, Please try it again!");
    return;
  }

  dataFromDb = JSON.parse(dataFromDb);
  let userFound = false;

  for (let userData of dataFromDb) {
    if (userData.email === email && userData.password === password) {

      userFound = true;
      if (remember) {
        createCookie(); 
      } else {
        let value = generateString(36);
        sessionStorage.setItem("sessionToken", value);
      }
      alert("Login successful");
      return;
    }
  }

  if (!userFound) {
    alert("Incorrect username or password");
  }
}
