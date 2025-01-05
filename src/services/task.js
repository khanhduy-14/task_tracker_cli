import Task from "../models/task.js";

class TaskService {
    static add({name}) {
        const task = new Task(name);
        return task.save()
    }

    static update({id, ...data}) {
        return Task.update(id, {
            ...data,
            updatedAt: Date.now()
        });
    }

    static delete({id}) {
        return Task.delete(id);
    }

    static getAll({filters = {}}) {
        return Task.getAll({filters});
    }
}

export default TaskService;