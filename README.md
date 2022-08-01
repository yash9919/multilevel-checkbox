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
name : Unique name of checkbox based on the parent and item number
parenId : Parent string of the current checbox
label : Label for the checkbox 

### `Nested checkbox`

Each checbox can have N levels of nesting depending on the data provided

### `Indeterminate state`
