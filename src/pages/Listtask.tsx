import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import Task from "./Task";
import { setFilter } from "../store/taskSlice";

const ListTask = () => {
  // useDispatch hook to get the dispatch function
  const dispatch = useDispatch();
  //   useSelector hook to get the tasks and filter from the state
  const { tasks, filter } = useSelector((state: RootState) => state.tasks);

  //   filter the tasks based on the filter value
  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "notDone") return !task.isDone;
    // if the filter is "all", return all tasks
    return true;
  });

  return (
    <div>
      <div className="space-x-5 mt-10">
        <button
          className="bg-blue-500 text-white p-2 rounded  font-bold"
          onClick={() => dispatch(setFilter("all"))}
        >
          All
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded  font-bold"
          onClick={() => dispatch(setFilter("done"))}
        >
          Done
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded  font-bold"
          onClick={() => dispatch(setFilter("notDone"))}
        >
          Not Done
        </button>
      </div>

      <div>
        {/* display filtered task */}
        {filteredTasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
