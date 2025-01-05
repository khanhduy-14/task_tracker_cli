import TaskService from "../services/task.js";
import {EnumTaskStatus} from "../constants/task.js";

export default class TaskController {
    static add({name}) {
        const task = TaskService.add({name});
        if (!task) {
            console.error(`Failed to add task!`)
            return;
        }

        console.log(`Task added successfully (ID: ${task.id})`);
        console.log(task.get());
    }

    static update({id, ...data}) {
        const task = TaskService.getOne({filters: {id}});

        if (!task) {
            console.log(`Update task successfully (ID: ${id})`);
            console.log({id, ...data});
            return;
        }

        const updatedTask = TaskService.update(task, data);
        if (!updatedTask) {
            console.error(`Failed to update task!`)
            return;
        }
        console.log(`Update task successfully (ID: ${updatedTask.id})`);
        console.log(updatedTask.get())
    }

    static delete({id}) {
        const task = TaskService.getOne({filters: {id}});

        if (!task) {
            console.log(`Delete task successfully (ID: ${id})`);
            return;
        }

        const deletedTask = TaskService.delete(task);
        if (!deletedTask) {
            console.error(`Failed to delete task!`)
            return;
        }
        console.log(`Delete task successfully (ID: ${deletedTask.id})`);
    }

    static getAll({filters = {}} = {}) {
        console.log(TaskService.getAll({filters}));
    }
}