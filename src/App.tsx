import React from "react";
import AddTask from "./pages/Addtask";
import ListTask from "./pages/Listtask";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4 font-bold">Task Manager</h1>
        <AddTask />
        <ListTask />
      </div>
    </div>
  );
};

export default App;
