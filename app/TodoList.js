import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  todos = todos.map((todo, i) => {
    return (
      <Todo
        key={i}
        todo={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        />
    )
  })
  return (
    <View>
      {todos}
    </View>
  )
}

export default TodoList
