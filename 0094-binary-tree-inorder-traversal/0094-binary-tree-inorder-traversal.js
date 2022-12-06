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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
   /**
   *           1
   *         /   \
   *        2     3    preorder traversal: 4 -> 2 -> 5 -> 1 -> 6 -> 3
   *       / \   /     (left -> root -> right)
   *      4   5 6
   */

    // console.log('v', JSON.stringify(root));
    const res = [];
    const stack = [];
    if (!root) return res;
    
    // 중위순위 sol 1
    // while (root !== null || stack.length !== 0) {
    //     if (root !== null) {
    //         stack.push(root);
    //         root = root.left;
    //     } else {
    //         root = stack.pop();
    //         res.push(root.val);
    //         root = root.right;
    //     }
    // }

    // 중위순위 sol2
    const traverse = (node) => {
        if(!node) return;

        traverse(node.left);
        res.push(node.val);
        traverse(node.right);
    }
    traverse(root);

    return res;
};
