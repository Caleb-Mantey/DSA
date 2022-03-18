const Tree = require("./tree");

const myTree = new Tree();

myTree.insert(7);
myTree.insert(4);
myTree.insert(1);
myTree.insert(6);
myTree.insert(9);
myTree.insert(10);
myTree.insert(8);

console.log(myTree._root);

console.log(myTree.find(11));
