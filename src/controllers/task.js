import TaskService from "../services/task/index.js";

export default class TaskController {
    static add({name}) {
        const id = TaskService.add({name});
        if (!id) {
            console.error(`Failed to add task!`)
            return;
        }

        console.log(`Task added successfully (ID: ${id})`);
    }

    static update({id, ...data}) {
        const updatedId = TaskService.update({id, ...data});
        if (!updatedId || updatedId < 0) {
            console.error(`Failed to update task!`)
            return;
        }
        console.log(`Update task successfully (ID: ${updatedId})`);
    }

    static delete({id}) {
        const deleteId = TaskService.delete({id});
        if (!deleteId || deleteId < 0) {
            console.error(`Failed to delete task!`)
            return;
        }
        console.log(`Delete task successfully (ID: ${deleteId})`);
    }

    static getAll({filters = {}} = {}) {
        console.log(TaskService.getAll({filters}));
    }
}