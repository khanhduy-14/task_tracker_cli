import TaskService from "../services/task/index.js";

export default class TaskController {
    static add(data) {
        const id = TaskService.add(data);
        if (!id) {
            console.error(`Failed to add task!`)
            return;
        }

        console.log(`Task added successfully (ID: ${id})`);
    }
}