# Task Tracker CLI

Task Tracker CLI is a simple command-line interface (CLI) based task tracker that allows you to manage your tasks
efficiently. It
supports adding, updating, deleting, and listing tasks with various statuses.

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Uninstallation](#uninstallation)
- [Usage](#usage)
    - [Add a Task](#add-a-task)
    - [List all Tasks](#list-all-tasks)
    - [Update a Task](#update-a-task)
    - [Delete a Task](#delete-a-task)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [Project Source](#project-source)
- [License](#license)

## Prerequisites

- Node.js

## Installation

**Clone the Repository**

   ```bash
   git clone git@github.com:khanhduy-14/task_tracker_cli.git
   # Navigate to the project Directory
   cd task_tracker_cli
   ```

**Install Dependencies**

   ```bash
   npm install
   ```

**Link the Project Globally**

   ```bash
   npm link
   ```

## Uninstallation

If you want to remove the global link for the CLI:

   ```bash
   npm unlink -g
   ```

## Usage

- #### **Add a Task**

```bash
task-cli add "New Task"
```

- #### **List all Tasks**

```bash
task-cli list

# To list the tasks that are marked as todo
task-cli list todo

# To list the tasks that are marked as in-progess
task-cli list in-progress

# To list the tasks that are marked as done
task-cli list done

```

- #### **Update a Task**

```bash
# Update name
# task-cli update [id] [name]
task-cli update 1 'Updated Task' 

# Mark a task is in-progress
# task-cli mark-in-progress [id]
task-cli mark-in-progress 1

# Mark a task is done
# task-cli mark-done [id]
task-cli mark-done 1

```

- #### **Delete a Task**

```bash
# task-cli delete [id]
task-cli delete 1
```

## Contributing

1. Fork this repository.
2. Create a new branch: `git checkout -b <branch_name>`
3. Make your changes and commit them: `git commit -am '<commit message>'`
4. Push your changes to your fork: `git push origin master`
5. Create a pull request

Alternatively see the GitHub documentation
on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

## Contributors

Thanks to the following people who have contributed to this project:

- [@khanhduy-14](https://github.com/khanhduy-14)

## Project source

This is a project from [Roadmap](https://www.roadmap.sh). Click this [link](https://roadmap.sh/projects/task-tracker) to
checkout the project

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)..