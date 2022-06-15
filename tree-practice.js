const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  let currentNode = rootNode;
  // let lowest = rootNode.val;
  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }
  return currentNode.val
}

function findMaxBST (rootNode) {
  let currentNode = rootNode;
  while (currentNode.right !== null) {
    currentNode = currentNode.right;
  }
  return currentNode.val;
}

function findMinBT (rootNode) {
  const queue = [rootNode];
  while (queue.length) {
    let currentNode = queue.shift();
    console.log(currentNode.val)
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right)
  }
  console.log(queue)
}
  


function findMaxBT (rootNode) {
  // Your code here
}

function getHeight (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function balancedTree (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}