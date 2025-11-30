<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::latest()->paginate(5);

        return Inertia::render('Todos/Index', [
            'todos' => $todos
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required'
        ]);

        Todo::create(['title' => $request->title]);

        return redirect()->back();
    }

    public function update(Request $request, Todo $todo)
    {
        $request->validate([
            'title' => 'required'
        ]);

        $todo->update(['title' => $request->title]);

        return redirect()->back();
    }

    public function destroy(Todo $todo)
    {
        $todo->delete();
        return redirect()->back();
    }

    public function toggle(Todo $todo)
    {
        $todo->update(['is_completed' => !$todo->is_completed]);
        return redirect()->back();
    }
}
