import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

const AddTask = () => {
  // useState hook to manage the state of the description variable
  const [description, setDescription] = useState("");
  //   useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  //   handleSubmit function that dispatches the addTask action with the description
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!description.trim()) {
        window.alert("Please enter a task description");
    }
    if (description.trim()) {
      dispatch(addTask({ description }));
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-4">
      <input
        className="border border-gray-400 p-2 font-bold"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a new task"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded  font-bold"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
