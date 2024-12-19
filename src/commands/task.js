import {Command} from "commander";
import TaskController from "../controllers/task.js";


export default class TaskCommand {
    static get add() {
        return new Command("add")
            .description("Add a new task")
            .argument("<name>", "Task name")
            .action(async (name) => {
                TaskController.add({name})
            })
    }
}