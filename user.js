const loadUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    // ----promise of response-//
    .then((response) => response.json())
    .then((data) => displayUser(data));
};

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// }

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
            <a><span >Email:</span>
               ${user.email}</a>
               <p><span>Mobile:</span> ${user.phone}</p>
               <h5>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}.</h5>
               <h4>Company: ${user.company.name}</h4>
               <p>Info: ${user.company.catchPhrase}, </p>
               <p>${user.company.bs}.</p>
          </div>
        `;

    // ----------3----------//
    userCont.append(userBox);
  });
};

loadUser();
