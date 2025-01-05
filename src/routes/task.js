import TaskCommand from "../commands/task.js";

const taskRouter = (app) => {
    app.addCommand(TaskCommand.add)
    app.addCommand(TaskCommand.update)
    app.addCommand(TaskCommand.delete)
    app.addCommand(TaskCommand.markInProgress)
    app.addCommand(TaskCommand.markDone)
    app.addCommand(TaskCommand.list)
}

export default taskRouter;