import JsonUtils from "../utils/json.js";

const dbJsonPath = "./database/index.json";

class Task {
    constructor(name, status = 'todo') {
        this.name = name;
        this.status = status;
    }

    save() {
        const data = JsonUtils.read(dbJsonPath);
        if (!data || !data?.tasks) {
            return;
        }
        const newId = (data.tasks?.length ?? 0) + 1;
        data.tasks = [...data.tasks, {...this, id: newId, createdAt: Date.now()}]
        const isSaved = JsonUtils.write(dbJsonPath, data)
        if (!isSaved) {
            return;
        }
        return newId;
    }

    static get(id) {
        const data = JsonUtils.read(dbJsonPath);
        if (!data || !data?.tasks) {
            return;
        }

        return data?.find(i => i.id === id);
    }

    static update(id, updatedData) {
        const data = JsonUtils.read(dbJsonPath);
        if (!data || !data?.tasks) {
            return;
        }
        let updatedId = -1;
        data.tasks = data.tasks.map((task) => {
            if (Number(task.id) === Number(id)) {
                updatedId = id;
                return {
                    ...task,
                    ...updatedData,
                }
            }
            return task
        });

        const isSaved = JsonUtils.write(dbJsonPath, data)
        if (!isSaved) {
            return -1;
        }
        return updatedId;
    }

    static delete(id) {
        const data = JsonUtils.read(dbJsonPath);
        if (!data || !data?.tasks) {
            return;
        }
        data.tasks = data.tasks.filter((task) => Number(task.id) !== Number(id))
        const isSaved = JsonUtils.write(dbJsonPath, data)
        if (!isSaved) {
            return -1;
        }
        return id;
    }

    static getAll({filters = {}}) {
        const data = JsonUtils.read(dbJsonPath);
        if (!data || !data?.tasks) {
            return [];
        }
        const filterKeys = Object.keys(filters);
        if (filterKeys.length <= 0) {
            return data.tasks;
        }
        return data.tasks.filter((task) => {
            for (const key of filterKeys) {
                if (!task.hasOwnProperty(key)) {
                    return false;
                }
                return task[key] === filters[key];

            }
        });
    }
}

export default Task;