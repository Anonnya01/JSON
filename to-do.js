const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTodo(data));
};
// -------async--------//
// const loadTodo =async () => {
//   const url = "https://jsonplaceholder.typicode.com/todos";
//   const res=await fetch(url)
//   const data= await res.json()
//     displayTodo(data);
// };

const displayTodo = (todos) => {
  const todoCont = document.getElementById("todo-cont");
  todoCont.innerHTML = "";

  todos.forEach((todo) => {
    console.log(todo);

    const todoBox = document.createElement("div");
    todoBox.innerHTML = `
    <div class="todo-box">
    <p>
     ${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}</p>
    <h4>${todo.title}</h4> 
    
    </div>
    `;
    todoCont.append(todoBox);
  });
};

loadTodo();
