function handleRegistration(event) {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const oldUsersData = JSON.parse(localStorage.getItem("usersData")) || [];

  const isUserRegistered = oldUsersData.some((user) => user.email === email);

  if (!firstName || !lastName || !email || !password) {
    alert(" Please enter all Fields.");
    return;
  }


  if (isUserRegistered) {
    alert("User with this email already exists. Please use a different email.");
    return;
  }

  if (!email.includes("@")) {
    alert("Email is not correct, Please try it again!");
    return;
  }

  
  const newUser = {
    firstName,
    lastName,
    email,
    password,
  };

  oldUsersData.push(newUser);

  localStorage.setItem("usersData", JSON.stringify(oldUsersData));

  alert("Registration successful!");

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}
