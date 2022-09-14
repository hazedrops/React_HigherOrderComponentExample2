import React, { useEffect, useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [term, setTerm] = useState('')

  const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await res.json()

    setTodos(json)
    console.log(json)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  // let renderUsers = users.map(user => {
  //   return (
  //     <div key={user.id}>
  //       <p>
  //         <strong>{user.name}</strong>
  //       </p>
  //     </div>
  //   )
  // })

  let filteredTodos = todos
    .slice(0, 10)
    .filter(({ title }) => {
      return title.toUpperCase().indexOf(term.toUpperCase()) >= 0
    })
    .map((todos) => {
      return (
        <div key={todos.userId}>
          <p>
            <strong>{todos.title}</strong>
          </p>
        </div>
      )
    })

  return (
    <div>
      <h2>Todos</h2>
      <input
        type='text'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div>{filteredTodos}</div>
    </div>
  )
}

export default TodoList
