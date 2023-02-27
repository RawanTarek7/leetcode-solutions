//Given the root of a binary tree, return the inorder traversal of its nodes' values.



var inorderTraversal = function(root) {
    let result = [];
    dfs(root);

    function dfs(root) {
        if(root != null) {
            dfs(root.left);
            result.push(root.val);
            dfs(root.right);
        }
    }

    return result;
};