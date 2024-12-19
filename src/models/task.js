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
        data.tasks = [...data.tasks, {...this, id: newId}]
        const isSaved = JsonUtils.write(dbJsonPath, data)
        if (!isSaved) {
            return;
        }
        return newId;
    }
}

export default Task;