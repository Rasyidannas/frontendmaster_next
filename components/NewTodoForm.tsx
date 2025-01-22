import { newTodo } from "@/utils/actions"

const NewTodoForm = ({}) => {

  return <div>
    <form action={newTodo}>
      <input name="content" type="text" className="border border-white/25 bg-gray-900"/>
      <button type="submit">new todo</button>
    </form>
  </div>
}

export default NewTodoForm
