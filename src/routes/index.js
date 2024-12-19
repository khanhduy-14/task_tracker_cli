import Task from "../models/task.js";

const createServerRoute = (path) => {
    switch (path) {
        case 'add':
            const task = new Task('Todo Task');
            task.save()
            break;
        default:
            console.log('Undefined action');
            break;
    }

}


export {
    createServerRoute
}