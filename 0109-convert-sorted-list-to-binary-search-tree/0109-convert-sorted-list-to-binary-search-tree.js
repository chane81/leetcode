/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (head === null) return null;

  const list = [];
  while (head !== null) {
    list.push(head.val);
    head = head.next;
  }


  const findHead = (start, end) => {
    if (start > end) return null;

    const middle = Math.ceil((start + end) / 2);
    const left = findHead(start, middle - 1);
    const right = findHead(middle + 1, end);

    return new TreeNode(list[middle], left, right);
  }

  return findHead(0, list.length - 1);
};