/**
 You are given the heads of two sorted linked lists list1 and list2.
 Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 Return the head of the merged linked list.*/

class solution {
    static mergeTwoLists(l1, l2) {
        if (!l1) return l2;
        if (!l2) return l1;
        const mergedNode = l1.val < l2.val ? new ListNode(l1.val) : new ListNode(l2.val);
        mergedNode.next = mergeTwoLists(l1.val < l2.val ? l1.next : l1, l1.val < l2.val ? l2 : l2.next);
        return mergedNode;
    }
}
