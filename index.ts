import axios from "axios";
 
const url = "http://jsonplaceholder.typicode.com/todos/1"

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

async () => {
    const response = await axios.get(url);
    console.log("yeah");
};

axios.get(url).then(response =>{
    const todo =response.data as Todo ;

    const num = todo.id;
    const title= todo.title;
    const done = todo.completed;
logTodo(num, title, done);
   
}); 

const logTodo = (ID: number, title: string, completed: boolean) => {
    console.log(ID);
    console.log(title);
    console.log(completed);
}
      

