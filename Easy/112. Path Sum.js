/**
 Given the root of a binary tree and an integer targetSum,
 return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 A leaf is a node with no children.
  */




var hasPathSum = function(root, sum) {
    return dfs(root, 0, sum);
};

var dfs = function(currRoot, currentSum, targetSum) {
    if (!currRoot) {
        return false;
    }

    currentSum += currRoot.val;

    if (currRoot.left === null && currRoot.right === null) {
        return currentSum === targetSum;
    }

    return dfs(currRoot.left, currentSum, targetSum) || dfs(currRoot.right, currentSum, targetSum);
}