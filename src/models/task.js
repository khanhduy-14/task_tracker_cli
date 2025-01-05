import JsonUtils from "../utils/json.js";
import ObjectUtils from "../utils/object.js";
import {EnumTaskStatus} from "../constants/task.js";

const dbJsonPath = "./database/index.json";

class Task {
    constructor(name, status = EnumTaskStatus.todo, createdAt = Date.now(), updatedAt = Date.now(), id = undefined, isDeleted = false) {
        this.name = name;
        this.status = status;
        this.id = id;
        this.isDeleted = isDeleted;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    get() {
        const data = {...this};
        delete data.isDeleted;
        delete data.deletedAt;
        return data;
    }

    static getAll({filters = {}} = {}) {
        const data = JsonUtils.read(dbJsonPath);
        if (!data || !data?.tasks) {
            return [];
        }
        const filterKeys = Object.keys(ObjectUtils.removeEmptyValues(filters));
        if (filterKeys.length <= 0) {
            return data.tasks;
        }
        return data.tasks.filter((task) => {
            return filterKeys.every((key) => task.hasOwnProperty(key) && String(task[key]) === String(filters[key]));
        });
    }

    static getOne({filters = {}} = {}) {
        const tasks = Task.getAll();
        const filterKeys = Object.keys(ObjectUtils.removeEmptyValues(filters));
        const task = tasks.find((task) =>
            filterKeys.every((key) => task.hasOwnProperty(key) && String(task[key]) === String(filters[key]))
        );

        if (task) {
            return new Task(task.name, task.status, task.createdAt, task.updatedAt, task.id, task.isDeleted);
        }
        return undefined;
    }


    save() {
        const tasks = Task.getAll();
        this.id = tasks.length + 1;
        const isSaved = JsonUtils.write(dbJsonPath, {
            tasks: [...tasks, this]
        })
        if (!isSaved) {
            return;
        }
        return this;
    }


    update(data) {
        const tasks = Task.getAll();

        Object.assign(this, {...this, ...data});

        const isSaved = JsonUtils.write(dbJsonPath, {
            tasks: tasks.map((task) => {
                if (Number(task.id) === Number(this.id)) {
                    return this;
                }
                return task
            }),
        })
        if (!isSaved) {
            return;
        }
        return this;
    }


}

export default Task;