import Task from "../models/task.js";

class TaskService {
    static add({name}) {
        const task = new Task(name);
        return task.save()
    }

    static update(task, data) {
        return task.update({...data, updatedAt: Date.now()});
    }

    static delete(task) {
        return task.update({isDeleted: true, deletedAt: Date.now()});
    }

    static getOne = ({filters = {}} = {}) => {
        const task = Task.getOne({filters})
        if (task.isDeleted) return;
        return task;
    }

    static getAll({filters = {}}) {
        return Task.getAll({filters}).filter((task) => !task.isDeleted).map((task) => {
            delete task.isDeleted;
            delete task.deletedAt;
            return task;
        });
    }
}

export default TaskService;