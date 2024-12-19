#! /usr/bin/env node

import {program} from "commander";
import {createServerRoute} from "../src/routes/index.js";
import TaskCommand from "../src/commands/task.js";

program
    .version("1.0.0")
    .description("Task Tracker CLI")

program.addCommand(TaskCommand.add)

program.parse(process.argv);

