
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    //作为表头，head.val是链表计数器
    var head = new ListNode(0);
    //temp1是进位
    var temp1 = 0;
    var temp2 = 0;
    var val1;
    var val2;
    while(l1 || l2 || temp1) {
        //防止出现内存读取错误
        if (l1)val1 = l1.val;
        else val1 = 0;
        if (l2) val2 = l2.val;
        else val2 = 0;

        //向下取整，否则temp1为浮点数
        temp2 = Math.floor((val1 + val2 + temp1) % 10);
        temp1 = Math.floor((val1 + val2 + temp1) / 10);
        //计数
        head.val += 1;  
        var newNode = new ListNode(temp2);  
        if(head.next == null){  
            head.next = newNode;  
        }
        else {
            var tempNode = head.next;  
            while(tempNode.next != null)  
                tempNode = tempNode.next;  
            tempNode.next = newNode;  
        }
        //若下一个不为空，则指向下一个
        if (l1)l1 = l1.next;
        if (l2)l2 = l2.next;
    }
    return head.next;
};