//Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.


var binaryTreePaths = function(root) {
    let result = [];
    dfs(root, "");
    function dfs(root, currentPath) {
        if (root == null) {return;}
        if (root.left == null && root.right == null) {
            currentPath += root.val;
            result.push(currentPath);
            return;
        }
        dfs(root.left, currentPath + root.val + "->");
        dfs(root.right, currentPath + root.val + "->");
    }
    return result;
};