//Given a binary tree, determine if it is

const checkHeight = node => {
    if (node === null) return 0;

    const left = checkHeight(node.left);
    const right = checkHeight(node.right);

    if (left === false ||right === false ||
        Math.abs(left - right) > 1
    ) {
        return false;
    }
    return Math.max(left, right) + 1;
};

const isBalanced = root => {
    if (root === null) return true;
    return checkHeight(root) !== false;
};