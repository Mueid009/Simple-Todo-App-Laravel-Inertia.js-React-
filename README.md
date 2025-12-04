Simple Todo App

Simple Todo App is a minimal full-stack todo application built with Laravel + Inertia.js + React. It demonstrates how to build a modern single-page app with a traditional server-side backend + JS frontend without building a separate API. 
GitHub
+2
Harrk Blog
+2

🔧 Tech Stack

Backend: Laravel (PHP)

Frontend: React (via Inertia.js)

Routing & Views: Inertia.js + Laravel controllers

Database: MySQL (or any DB supported by Laravel)

Build tools: Vite (or Laravel Mix, depending on setup)

Optional: CSS frameworks / styling as per your setup

✅ Features

Add / Edit / Delete / List tasks (CRUD)

Stateful UI with React components, dynamic page updates

Use of Inertia.js for SPA-like feeling while keeping Laravel as backend

Simple and clean architecture suitable for learning or small projects

🚀 Installation & Setup
# 1. Clone the repository  
git clone https://github.com/Mueid009/Simple-Todo-App-Laravel-Inertia.js-React-.git  
cd Simple-Todo-App-Laravel-Inertia.js-React-  

# 2. Install PHP dependencies  
composer install  

# 3. Install JS dependencies  
npm install        # or yarn  

# 4. Copy environment file and configure database  
cp .env.example .env  
# then update .env with your DB credentials  

# 5. Generate application key  
php artisan key:generate  

# 6. Run migrations (if migrations included)  
php artisan migrate  

# 7. Build frontend assets (for development)  
npm run dev        # or yarn dev  

# 8. Run the application  
php artisan serve  
# Visit http://localhost:8000 in your browser  

🧪 Usage

Once you open the app in browser:

You can create a new todo/task

Edit existing tasks or delete them

See a list of all tasks dynamically updated via React + Inertia

This setup demonstrates how Laravel + Inertia + React can be used to build a fast, reactive, yet server-backed application. 
laraveldaily.com
+1

📚 Why Laravel + Inertia + React?

Inertia.js allows you to build single-page applications using server-side routing and controllers, avoiding the overhead of a separate REST API. 
GitHub
+2
Harrk Blog
+2

React gives a responsive, reactive frontend UI, while Laravel handles backend logic, database migrations, authentication (if needed), and server-side rendering.

The architecture is simple enough for small apps but scalable for more complex projects — a good base for bigger SPAs or SaaS-style apps.
