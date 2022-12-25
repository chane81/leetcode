/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // bfs
    // return getDepthByBfs(root);

    // dfs
    // return getDepthByDfs(root);

    return getDepth(root);
};

/** dfs */
const getDepthByDfs = (root) => {
    let depth = 0;

    const dfs = (root, len) => {
        if (!root) {
            depth = Math.max(len, depth);
            return;
        }

        dfs(root.left, len + 1);
        dfs(root.right, len + 1);
    }

    dfs(root, 0);

    return depth;
}

/** bfs */
const getDepthByBfs = (root) => {
    const queue = [];
    let depth = 0;

    if (root === null || root === undefined) return 0;

    queue.push(root);

    while (queue.length > 0) {
        const len = queue.length;

        for (let i = 0; i < len; i++) {
            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }
        
        queue.splice(0, len);
        depth++;
    }

    return depth;
}

const getDepth = (root) => {
    if (root === null || root === undefined) return 0;

    return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
}
