import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../store/taskSlice";

// TaskProps is an interface that defines the shape of the props
interface TaskProps {
  id: number;
  description: string;
  isDone: boolean;
}

const Task = ({ id, description, isDone }: TaskProps) => {
  // useState hook to manage the state of the isEditing and newDescription variables
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);
  const dispatch = useDispatch();

  //   handleToggle function that dispatches the toggleTask action with the id of the task
  const handleToggle = () => {
    dispatch(toggleTask({ id }));
  };

  //   handleEdit function that toggles the isEditing state and dispatches the editTask action with the id and newDescription
  const handleEdit = () => {
    if (isEditing && newDescription.trim()) {
      dispatch(editTask({ id, description: newDescription }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="mt-20 space-x-3">
      <input
        className="mr-2"
        type="checkbox"
        checked={isDone}
        onChange={handleToggle}
      />

      {isEditing ? (
        <input
          className="border border-gray-400 p-2 font-bold"
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
          {description}
        </span>
      )}
      <button 
      className="bg-blue-500 text-white p-2 rounded  font-bold"
      onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
};

export default Task;
