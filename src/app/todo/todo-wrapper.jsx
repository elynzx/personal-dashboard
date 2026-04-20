import { Outlet } from "react-router";
import { useTasks } from "../../features/todo/hooks/useTasks";

export function TodoWrapper() {
    const { tasks, addTask, deleteTask, updateStatus, updateTask } = useTasks();
    return (
        <Outlet
            context={{
                tasks,
                addTask,
                deleteTask,
                updateStatus,
                updateTask,
            }}
        />
    );
}
