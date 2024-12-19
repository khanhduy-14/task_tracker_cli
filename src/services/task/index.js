import Task from "../../models/task.js";

class TaskService {
    static add({name}) {
        const task = new Task(name);
        return task.save()
    }
}

export default TaskService;