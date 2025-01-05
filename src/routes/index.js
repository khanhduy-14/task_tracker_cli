import taskRouter from "./task.js";

export const createGateway = (program) => {
    taskRouter(program);
}