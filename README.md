# How ansible work
- Ansible works by connecting to your nodes and pushing out small programs, called modules. Ansible then executes these modules and removes them when finished
- Ansible is agent-less - Ansible does not require any agents to be installed on the remote systems
- Ansible uses ssh to connect

# Playbook
- Is a YAML file containing 1 or more plays, and is used to define the desired state of a system
- Run in order from top to bottom

## Tasks
- Name : it's recommended to add meaningful name to each task 
- State: should use specific state instead of default
- Module: should use fqdn format for module name

## Handlers
- Like task but execute only when is notified
- Execute after all tasks after pre_tasks or tasks or post_tasks are executed
- Execute in order that are defined not by notified order
 
## PreTasks & PostTasks
- Define tasks that are executed before (or after) main tasks

## Blocks
- Group of tasks

## Tags
- Useful to run only some kinds of tasks or exclude them from executed

## Variables
- User defined variables
- Environment variables
- Override vars
- Facts
- Vault
- Register
- Prompts
- Secret (ansible-secret, or third-party)

## Conditionals
- When: run task only if some 
- Failed_when: describe when the task failed or not
- Changed_when: describe when the task changed or not
- Loop, with_items: prefer loop
- Wait-for

## Roles
- Way to package related configurations nicely
- Is a set of tasks to configure a host to serve a certain purpose like configuring a service
- Ansible automatically includes any main.yml files inside specific directories that
make up the role

## Include & import
- Way to reuse ansible configs, 
- Import: static, can be process before the play actual execute
- Include: dynamic -> need to do different things depending on how the rest of the playbook runs

## Hosts & inventory file
- Hosts can be groups and use the same config, execute the same play
- We can place variables directly inside an inventory file
- Inventories can be dynamic

## Ansible-galaxy
- Ansible’s official hub for sharing Ansible roles
- Requirement.txt & roles_path

# How to ...
- Manage users & group
- Manage file & directory
- Manage packages
- Run operation in the background
- Manage cron jobs
- Use git module
- Interact with ansible CLI
- Use docker with ansible
- Debug

# Side-notes
- Delegation
- Jinja & python expression
- Dynamic inventories

# Examples
