# Multilevel Checkbox

Project implements a multilevel checkbox which can be nested to N levels

## Features

In the project directory, you can run:

### `Isolated data file`

Data for different checkbox can be added in the data.js file
data.js file should have a checkboxArray array which will contain objects for each checkbox
Example:
```
  {
    name: '0-0',
    parentId: null,
    label: "EPL"
  }
```
1. name : Unique name of checkbox based on the parent and item number
2. parenId : Parent string of the current checbox
3. label : Label for the checkbox 

### `Nested checkbox`

Each checbox can have N levels of nesting depending on the data provided

### `Indeterminate state`

1. Checboxes have an indeterminate state if any child checkbox is selected.
2. Checkbox turns checked when all it's child checkbox are selected.

