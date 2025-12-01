import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos = [] }) {
  if (!todos.length) {
    return <div className="text-center text-gray-500">No todos yet — add your first one!</div>;
  }
  return (
    <ul className="space-y-3">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
