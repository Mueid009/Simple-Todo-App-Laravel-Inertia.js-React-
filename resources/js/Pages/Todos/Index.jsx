import { useForm, Link } from '@inertiajs/react';

export default function Index({ todos }) {

    const { data, setData, post, put, delete: destroy, reset } = useForm({
        title: '',
        edit_id: null
    });

    const submit = (e) => {
        e.preventDefault();

        if (data.edit_id) {
            put(`/todos/${data.edit_id}`, {
                onSuccess: () => reset()
            });
        } else {
            post('/todos', {
                onSuccess: () => reset()
            });
        }
    };

    const editTodo = (todo) => {
        setData({ title: todo.title, edit_id: todo.id });
    };

    return (
        <div className="max-w-lg mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-3">Todo App</h1>

            {/* Form */}
            <form onSubmit={submit} className="flex gap-2 mb-5">
                <input
                    type="text"
                    className="border p-2 w-full"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    placeholder="Add a todo..."
                />
                <button className="bg-blue-500 text-white px-4">
                    {data.edit_id ? "Update" : "Add"}
                </button>
            </form>

            {/* List */}
            <ul>
                {todos.data.map(todo => (
                    <li key={todo.id} className="flex justify-between items-center border p-2 mb-2">
                        
                        <div className="flex items-center gap-2">
                            <input 
                                type="checkbox"
                                checked={todo.is_completed}
                                onChange={() => put(`/todos/${todo.id}/toggle`)}
                            />
                            <span className={todo.is_completed ? "line-through" : ""}>
                                {todo.title}
                            </span>
                        </div>

                        <div className="flex gap-2">
                            <button onClick={() => editTodo(todo)} className="text-green-600">Edit</button>
                            <button onClick={() => destroy(`/todos/${todo.id}`)} className="text-red-600">Delete</button>
                        </div>

                    </li>
                ))}
            </ul>

            {/* Pagination */}
            <div className="mt-4 flex gap-2">
                {todos.links.map(link => (
                    <Link
                        key={link.label}
                        href={link.url || ""}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`px-2 ${link.active ? "font-bold" : ""}`}
                    />
                ))}
            </div>
        </div>
    );
}
