import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';

export default function MainLayout({ children }) {
  const { auth } = usePage().props; // if you pass auth from backend
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Simple Todo</h1>
          <div className="flex items-center space-x-4">
            <nav className="hidden sm:flex space-x-3">
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Dashboard</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  );
}
