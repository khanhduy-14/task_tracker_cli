import {program} from "commander";
import {createGateway} from "./src/routes/index.js";

program
    .version("1.0.0")
    .description("Task Tracker CLI")


createGateway(program)
program.parse(process.argv);