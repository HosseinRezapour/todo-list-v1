import TodoList from "../../components/todo/todo-list"
import TodoAdd from "../../components/todo/todo-add"
import { TodoProvider } from "../../components/todo/todo-context";

export default function Home() {


  return (
    <div className='container  mx-auto mt-20 max-w-screen-sm

    '>
      <div>
        <TodoProvider>
          <TodoAdd />

          <TodoList />
        </TodoProvider>
      </div>
    </div>
  );
}




