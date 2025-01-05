#! /usr/bin/env node

import {program} from "commander";
import TaskCommand from "../src/commands/task.js";

program
    .version("1.0.0")
    .description("Task Tracker CLI")

program.addCommand(TaskCommand.add)
program.addCommand(TaskCommand.update)
program.addCommand(TaskCommand.delete)
program.addCommand(TaskCommand.markInProgress)
program.addCommand(TaskCommand.markDone)
program.addCommand(TaskCommand.list)

program.parse(process.argv);

