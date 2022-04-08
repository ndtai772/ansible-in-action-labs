# How ansible work

# Basic concept
## Playbook
- Tasks
- Handlers
- PreTasks & PostTasks
- Tasks
    - Name
    - Module
    - State
- Blocks
- Tags

## Variables
- User defined variables
- Environment variables
- Override vars
- Facts
- Vault
- Register
- Prompts

## Conditionals
- When, changed_when, failed_when
- Loops
- Delegation
- Wait-for

# Organization
- Includes
- Imports
- Roles

## Hosts & inventory file
## Roles
## Imports & ansible-galaxy

# How to ...
- Manage users & group
- Manage file & directory
- Manage packages
- Run operation in the background
- Manage cron jobs
- Use git module
- Interact with ansible CLI

# Side-notes
- Delegation
- Jinja & python expression
- ANSIBLE_STDOUT_CALLBACK=yaml

# Important things
- Play, role, block, task
- Condition --> register, when, failed_when, changed_when
- Loop: loop, list_items
- Debug: setup, gather_package_fact
- Validate: check_mode
- Jinja: specs, functions
- Variables, facts
- Connection
- include vs import