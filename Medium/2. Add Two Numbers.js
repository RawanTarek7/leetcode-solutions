/**
 You are given two non-empty linked lists representing two non-negative integers.
 The digits are stored in reverse order, and each of their nodes contains a single digit.
 Add the two numbers and return the sum as a linked list.
 You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

const addTwoNumbers = (l1, l2) => {
    let c = 0, r = new ListNode(), n = r;
    while (l1 || l2 || c) {
        let s = (l1?.val ?? 0) + (l2?.val ?? 0) + c;
        c = s >= 10;
        n.next = new ListNode(s % 10);
        n = n.next, l1 = l1?.next, l2 = l2?.next;
    }
    return r.next;
};