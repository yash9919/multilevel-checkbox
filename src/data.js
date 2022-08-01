export let checkboxArray = [
  {
    name: '0-0',
    parentId: null,
    label: "EPL"
  },
  {
    name: '0-1',
    parentId: null,
    label: "IPL"
  },
  {
    name: '0-2',
    parentId: null,
    label: "Kabaddi"
  },
  {
    name: '0-0-1',
    parentId: '0-0',
    label: "Chelsea"
  },
  {
    name: '0-0-0',
    parentId: '0-0',
    label: "Arsenal"
  },
  {
    name: '0-0-0-0',
    parentId: '0-0-0',
    label: "Player 1"
  },
  {
    name: '0-0-0-1',
    parentId: '0-0-0',
    label: "Player 2"
  },
  {
    name: '0-0-0-2',
    parentId: '0-0-0',
    label: "Player 3"
  },
  {
    name: '0-0-1-0',
    parentId: '0-0-1',
    label: "Player 1"
  },
  {
    name: '0-0-1-1',
    parentId: '0-0-1',
    label: "Player 2"
  },
  {
    name: '0-0-1-2',
    parentId: '0-0-1',
    label: "Player 3"
  },
  {
    name: '0-0-2',
    parentId: '0-0',
    label: "Manchester United"

  },
  {
    name: '0-1-0',
    parentId: '0-1',
    label:"Mumbai Indians"
  },
].sort(function (a, b) {
  if (a.name < b.name)
    return -1;
  else
    return 1;
});
