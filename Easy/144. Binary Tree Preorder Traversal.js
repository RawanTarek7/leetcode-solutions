//Given the root of a binary tree, return the preorder traversal of its nodes' values.


var preorderTraversal = function(root) {
    let result = [];
    dfs(root);

    function dfs(root) {
        if(root != null){
            result.push(root.val);
            dfs(root.left);
            dfs(root.right);
        }
    }
    return result;

};