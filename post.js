const loadPosts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((rec) => rec.json())
    .then((data) => {
      // console.log(data);
      displayPost(data);
    });
};



const displayPost = (posts) => {
  // ----------1----------//
  const postCont = document.getElementById("post-cont");
  postCont.innerHTML = "";
  posts.forEach((post) => {
    console.log(post);
    //    ----------------2-----------//
    const postBox = document.createElement("div");
    postBox.innerHTML = `
      <div class="box">
        <h2>${post.title}</h2>
        <p>
           ${post.body}</p>
      </div>
    `;

    // ----------3----------//
    postCont.append(postBox)
  });
};

// loadPosts()