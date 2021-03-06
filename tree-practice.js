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
  let lowest = Infinity;
  const queue = [rootNode];
  while (queue.length) {
    let currentNode = queue.shift();
    if (lowest > currentNode.val) {lowest = currentNode.val}
    //console.log(currentNode.val)
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right)
  }
return lowest;
}



function findMaxBT (rootNode) {
  let highest = -Infinity;
  const queue = [rootNode];
  while (queue.length) {
    let currentNode = queue.shift();
    if (highest < currentNode.val) {highest = currentNode.val}
    // console.log(currentNode.val)
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right)
  }
return highest;
}


function getHeight (rootNode) {
//set count variable
let count = 0;
const stack = [rootNode];
while (stack.length) {
    count++
    let currentNode = stack.pop();
    if (!currentNode.right) return count - 1;
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
  }
}

function countNodes (rootNode) {
  let count = 0;
  const stack = [rootNode];
  while (stack.length) {
    count++
    let currentNode = stack.pop();
    // duplicates.add(currentNode.val);
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
  }
  return count;
}

function balancedTree (rootNode) {
  let count = 0;
  let countLeft = 0;
  let countRight = 0;
  const stackLeft = [rootNode.left];
  const stackRight = [rootNode.right];
  const stack = [rootNode];
  while (stackLeft.length) {
    countLeft++;
    let currentNode = stackLeft.pop();
    // if (!currentNode.right) return;
    if (currentNode.left) {
      stackLeft.push(currentNode.left);
    }
    if (currentNode.right) {
      stackRight.push(currentNode.right);
    }
  }
    while (stackRight.length) {
      countRight++;
      let currentNode = stackRight.pop();
      if (!currentNode.right) return Math.abs(countLeft - countRight) <= 1;
      if (currentNode.left) {
        stackRight.push(currentNode.left);
      }
      if (currentNode.right) {
        stackRight.push(currentNode.right);
      }
   }
  //  console.log(countLeft, countRight)
  //  return Math.abs(countLeft - countRight) <= 1;
}

function getParentNode (rootNode, target) {
  const stack = [rootNode];
  let prev = null;
  while (stack.length) {
    let currentNode = stack.shift();
    console.log(currentNode.val);
    if (currentNode.left) stack.push(currentNode.left);
    if (currentNode.right) stack.push(currentNode.right);
  }
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
