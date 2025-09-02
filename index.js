// console.log("explore api");

// const student = {
//   name: "samim",
//   age: 13,
//   pass: true,
//   subject: ["Math", "english", "bangla"],
// };
// console.log(student ,typeof student);

// const studentJSON = JSON.stringify(student);
// console.log(studentJSON, typeof studentJSON);

// const studentP = JSON.parse(studentJSON)
// console.log(studentP);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    // ----promise of response-//
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const loadPosts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((post) => display(post));
};

const display = (posts)=>{
    console.log(posts);
    
}
