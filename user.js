const loadUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    // ----promise of response-//
    .then((response) => response.json())
    .then((data) => displayUser(data));
};


const displayUser = (users) => {
  // ----------1----------//
  const userCont = document.getElementById("user-cont");
  userCont.innerHTML = "";
  users.forEach((user) => {
    console.log(user);
    //----------------2-----------//
    const userBox = document.createElement("div");
    userBox.innerHTML = `
          <div class="user-box">
            <h3>Name: ${user.name}</h3>
           <span>email:</span> <a href=""> ${user.email}</a>
               <p><span>Mobile:</span> ${user.phone}</p>
               <h5>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}.</h5>
               <h4>Company:  ${user.company.name}</h4>
               <p>Info: ${user.company.catchPhrase}, </p>
               <p>${user.company.bs}.</p>
          </div>
        `;

    // ----------3----------//
    userCont.append(userBox);
  });
};

loadUser();
