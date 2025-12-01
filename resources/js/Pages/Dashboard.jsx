import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import TodoList from '../Components/TodoList';
import TodoForm from '../Components/TodoForm';

export default function Dashboard({ todos }) {
  return (
    <MainLayout>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Todos</h2>
        <div className="hidden sm:block">
          {/* optional controls */}
        </div>
      </div>

      <div className="space-y-6">
        <TodoForm />
        <TodoList todos={todos} />
      </div>
    </MainLayout>
  );
}
