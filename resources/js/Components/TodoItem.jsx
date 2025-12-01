import React from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function TodoItem({ todo }) {
  const toggleComplete = () => {
    Inertia.put(route('todos.update', todo.id), { completed: !todo.completed }, { preserveScroll: true });
  };

  const destroy = () => {
    if (!confirm('Delete this todo?')) return;
    Inertia.delete(route('todos.destroy', todo.id));
  };

  return (
    <li className="bg-white p-3 rounded shadow-sm flex items-start justify-between">
      <div className="flex items-center gap-3">
        <input type="checkbox" checked={todo.completed} onChange={toggleComplete} className="h-5 w-5" />
        <div>
          <div className={`font-medium ${todo.completed ? 'line-through text-gray-400' : ''}`}>{todo.title}</div>
          {todo.description && <div className="text-xs text-gray-500">{todo.description}</div>}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={destroy} className="text-sm text-red-500">Delete</button>
      </div>
    </li>
  );
}
