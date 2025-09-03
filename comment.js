const loadCmnt = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    // ----promise of response-//
    .then((response) => response.json())
    .then((data) => displayCmnt(data));
};

// {
//     "postId": 100,
//     "id": 496,
//     "name": "et occaecati asperiores quas voluptas ipsam nostrum",
//     "email": "Zola@lizzie.com",
//     "body": "neque unde voluptatem iure\nodio excepturi ipsam ad id\nipsa sed expedita error quam\nvoluptatem tempora necessitatibus suscipit culpa veniam porro iste vel"
// }

const displayCmnt = (cmnts) => {
  // ----------1----------//
  const cmntCont = document.getElementById("cmnt-cont");
  cmntCont.innerHTML = "";
  cmnts.forEach((cmnt) => {
    console.log(cmnt);
    //----------------2-----------//
    const cmntBox = document.createElement("div");
    cmntBox.innerHTML = `
          <div class="box">
            <h3>Name: ${cmnt.name}</h3>
           <span>email:</span> <a href=""> ${cmnt.email}</a>
               <p>${cmnt.body} </p>
          </div>
        `;

    // ----------3----------//
    cmntCont.append(cmntBox);
  });
};

loadCmnt();
