import {Command} from "commander";
import TaskController from "../controllers/task.js";
import {EnumTaskStatus} from "../constants/task.js";


export default class TaskCommand {
    static get add() {
        return new Command("add")
            .description("Add a new task")
            .argument("<name>", "Task name")
            .action((name) => {
                TaskController.add({name})
            })
    }

    static get update() {
        return new Command("update")
            .description("Update a task")
            .argument("<id>", "Task id")
            .argument("<name>", "Task name")
            .action((id, name) => {
                TaskController.update({id, name})
            })
    }

    static get delete() {
        return new Command("delete")
            .description("Delete a task")
            .argument("<id>", "Task id")
            .action((id, name) => {
                TaskController.delete({id})
            })
    }

    static get markInProgress() {
        return new Command("mark-in-progress")
            .description("Mark a task is in progress")
            .argument("<id>", "Task id")
            .action((id, name) => {
                TaskController.update({id, status: EnumTaskStatus['in-progress']})
            })
    }

    static get markDone() {
        return new Command("mark-done")
            .description("Mark a task is done")
            .argument("<id>", "Task id")
            .action(async (id, name) => {
                TaskController.update({id, status: EnumTaskStatus['done']})
            })
    }

    static get list() {
        return new Command("list")
            .description("Listing tasks")
            .argument("[status]", "Task status")
            .action((status) => {
                TaskController.getAll({
                    filters: {
                        status: EnumTaskStatus[status],
                    }
                })
            })
    }


}