import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';

export default function TodoForm() {
  const { data, setData, post, processing, reset, errors } = useForm({
    title: '',
    description: '',
  });

  function submit(e) {
    e.preventDefault();
    post(route('todos.store'), {
      onSuccess: () => reset(),
    });
  }

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <input
          value={data.title}
          onChange={e => setData('title', e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 px-3 py-2 border rounded"
          required
        />
        <button disabled={processing} className="px-4 py-2 bg-blue-600 text-white rounded">
          Add
        </button>
      </div>
      {errors.title && <p className="text-xs text-red-600 mt-2">{errors.title}</p>}
    </form>
  );
}
