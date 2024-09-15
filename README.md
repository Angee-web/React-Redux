Task Manager App
A simple React TypeScript task management application that allows users to add, edit, delete, and filter tasks. The app uses Redux Toolkit to manage the state, including operations for task management.

Features
Add new tasks
Edit existing tasks
Delete tasks
Mark tasks as completed
Filter tasks by their completion status
Persist tasks using local storage

Tech Stack
React with TypeScript (tsx)
Redux Toolkit for state management
Tailwind CSS for styling

Folder Structure
/src/components - Reusable components (e.g., TaskItem, TaskFilter)
/src/pages - Contains the main task management pages (e.g., AddTask, ListTask)
/src/store - Redux Toolkit slices and reducers

Redux Overview
Slices
A slice in Redux Toolkit represents a part of the global state and contains the logic for state transitions. In this app, we have a tasksSlice which holds the state of tasks, and manages actions like adding, editing, and deleting tasks.

Reducers
A reducer is a pure function that takes the current state and an action as inputs and returns a new state. Each slice has its own reducer, which handles specific actions (e.g., addTask, deleteTask) to update the task list. Redux Toolkit simplifies this with built-in methods to define reducers.
