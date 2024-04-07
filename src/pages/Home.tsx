import { useState } from "react";
import { Header, List, ListItemData } from "../components";

const initialData: ListItemData[] = [
  { text: "primu todo",id:'1' },
  { text: "primu todo",id:'2' },
];

export function Home() {
  const [todos, setTodo] = useState<ListItemData[]>(initialData);

  function handleAddTodo(value: string) {

    setTodo((data) => [...data, { text: value ,id:`${Math.random()* 1000}-${value}`}]);
  }
  function handleOnDiscard(id:string ){
 const filteredTodo = todos.filter((todo)=> todo.id !==id )
  setTodo(filteredTodo)

  }


  return (
    <div>
      <h1>To-Do List</h1>
      <Header onClick={handleAddTodo} />
      <List data={todos} onDiscard={handleOnDiscard}/>
    </div>
  );
}
