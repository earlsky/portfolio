const flashcards = [
    { que: "Record",
        ans: "the data structure that stores subitems, often called fields, with a name associated with each subitem." 
    },
    { que: "Array",
        ans: "a data structure that stores an ordered list of items, where each item is directly accessible by a positional index." 
    },
    { que: "Linked list",
        ans: "a data structure that stores an ordered list of items in nodes, where each node stores data and has a pointer to the next node." 
    },
    { que: "Binary tree",
        ans: "a data structure in which each node stores data and has up to two children, known as a left child and a right child."
    },
    { que: "Hash table",
        ans: "a data structure that stores unordered items by mapping (or hashing) each item to a location in an array."
    },
    { que: "Max-heap",
        ans: "a tree that maintains the simple property that a node's key is greater than or equal to the node's childrens' keys."
    },
    { que: "Min-heap",
        ans: "a tree that maintains the simple property that a node's key is less than or equal to the node's childrens' keys."
    },
    { que: "Graph",
        ans: "a data structure for representing connections among items, and consists of vertices connected by edges."
    },
    { que: "Vertex",
        ans: "represents an item in a graph."
    },
    { que: "Edge",
        ans: "represents a connection between two vertices in a graph."
    },
    { que: "Algorithm",
        ans: "a sequence of steps to solve a computational problem or perform a calculation. An algorithm can be described in English, pseudocode, a programming language, hardware, etc."
    },
    { que: "Computational Problem",
        ans: "specifies an input, a question about the input that can be answered using a computer, and the desired output."
    },
    { que: "NP-complete problems",
        ans: "are a set of problems for which no known efficient algorithm exists."
    },
    { que: "NP-complete problems have the following characteristics:",
        ans: `No efficient algorithm has been found to solve an NP-complete problem.
        No one has proven that an efficient algorithm to solve an NP-complete problem is impossible.
        If an efficient algorithm exists for one NP-complete problem, then all NP-complete problems can be solved efficiently.

By knowing a problem is NP-complete, instead of trying to find an efficient algorithm to solve the problem, a programmer can focus on finding an algorithm to efficiently find a good, but non-optimal, solution.`
    },
    { que: "Abstract data type (ADT)",
        ans: `a data type described by predefined user operations, such as "insert data at rear," without indicating how each operation is implemented. 
        An ADT can be implemented using different underlying data structures. 
        However, a programmer need not have knowledge of the underlying implementation to use an ADT.

        Ex: A list is a common ADT for holding ordered data, having operations like append a data item, remove a data item, search whether a data item exists, and print the list. 
        A list ADT is commonly implemented using arrays or linked list data structures.`
    },
    { que: "List",
        ans: `an ADT for holding ordered data.
        ex: array, linked list`
    },
    { que: "Dynamic array",
        ans: `an ADT for holding ordered data and allowing indexed access.
        ex: array`
    },
    { que: "Stack",
        ans: `an ADT in which items are only inserted on or removed from the top of a stack.
        ex: linked list`
    },
    { que: "Queue",
        ans: `an ADT in which items are inserted at the end of the queue and removed from the front of the queue.
        ex: linked list`
    },
    { que: "Deque (pronounced 'deck' and short for double-ended queue)",
        ans: `an ADT in which items can be inserted and removed at both the front and back.
        ex: linked list`
    },
    { que: "Bag",
        ans: `an ADT for storing items in which the order does not matter and duplicate items are allowed.
        ex: array, linked list`
    },
    { que: "Set",
        ans: `an ADT for a collection of distinct items.
        ex: binary search tree, hash table`
    },
    { que: "Priority queue",
        ans: `a queue where each item has a priority, and items with higher priority are closer to the front of the queue than items with lower priority.
        ex: heap`
    },
    { que: "Dictionary (Map)",
        ans: `an ADT that associates (or maps) keys with values.
        ex: hash table, binary search tree`
    },
    { que: "Greedy algorithm",
        ans: `solves a problem by assuming that the optimal choice at a given moment during the algorithm will also be the optimal choice overall. 
        Greedy algorithms tend to be efficient, but certain types of problems exist where greedy algorithms don't find the best or optimal solution. 
        However, greedy algorithms produce both efficient and optimal solutions for many problems, including the fractional knapsack problem and the activity selection problem.`
    },
    { que: "Dynamic programming",
        ans: `a problem solving technique that splits a problem into smaller subproblems, computes and stores solutions to subproblems in memory, and then uses the stored solutions to solve the larger problem. 
        Ex: Fibonacci numbers can be computed with an iterative approach that stores the 2 previous terms, instead of making recursive calls that recompute the same term many times over.`
    },
    { que: "Longest common substring",
        ans: ""
    },
    { que: "List",
        ans: `A common ADT for holding ordered data, having operations like append a data item, remove a data item, search whether a data item exists, and print the list. 
        Ex: For a given list item, after "Append 7", "Append 9", and "Append 5", then "Print" will print (7, 9, 5) in that order, and "Search 8" would indicate item not found. 
        A user need not have knowledge of the internal implementation of the list ADT. 
        Examples in this section assume the data items are integers, but a list commonly holds other kinds of data like strings or entire objects.`
    },
    { que: "Common list ADT operations (part 1)):",
        ans: `Operation: Description = example starting with "list: 99,77"
---
Append(list,x): 
Inserts x at end of list = 
Append(list,44), list: 99,77,44

Prepend(list,x):
Inserts x at start of list =
Prepend(list,44), list: 44,99,77

InsertAfter(list,w,x):
Inserts x after w = 
InsertAfter(list,99,44), list: 99,44,77

Remove(list,x):
Removes x
Remove(list,77), list: 99

Search(list, x):
Returns item if found, else returns null =
Search(list, 99), returns item 99
Search(list, 22), returns null
`
    },
    { que: "Common list ADT operations (part 2)):",
        ans: `Print(list):
Prints list's items in order =
Print(list) outputs: 99, 77

PrintReverse(list):
Prints list's items in reverse order =
PrintReverse(list) outputs: 77, 99

Sort(list):
Sorts the lists items in ascending order =
list becomes: 77, 99

IsEmpty(list):
Returns true if list has no items =
For list 99, 77, IsEmpty(list) returns false

GetLength(list):
Returns the number of items in the list =
GetLength(list) returns 2`
    },
    { que: "List data structure",
        ans: "a data structure containing the list's head and tail, and may also include additional information, such as the list's size."
    },
    { que: "List node data structure",
        ans: "maintains the data for each list element, including the element's data and pointers to the other list element."
    },
    { que: "Singly-linked list",
        ans: "a data structure for implementing a list ADT, where each node has data and a pointer to the next node. The list structure typically has pointers to the list's first node and last node."
    },
    { que: "singly-linked list's FIRST node is called...",
        ans: "the HEAD"
    },
    { que: "singly-linked list's LAST node is called...",
        ans: "the TAIL"
    },
    { que: "null",
        ans: "a special value indicating a pointer points to nothing."
    },
    { que: "Append operation for a singly-linked list...",
        ans: "inserts the new node AFTER the list's TAIL node."
    },
    { que: "Prepend operation for a singly-linked list...",
        ans: "inserts the new node before the list's head node."
    },
    { que: "Doubly-linked list",
        ans: `a data structure for implementing a list ADT, where each node has data, a pointer to the next node, and a pointer to the previous node. 
        The list structure typically points to the first node and the last node. 
        The doubly-linked list's first node is called the head, and the last node the tail.`
    },
    { que: "Positional list",
        ans: `singly- and doubly-linked list are a type of positional list.
        A list where elements contain pointers to the next and/or previous elements in the list.`
    },
    { que: "Circular linked list",
        ans: `a linked list where the tail node's next pointer points to the head of the list, instead of null. 
        A circular linked list can be used to represent repeating processes. 
        Ex: Ocean water evaporates, forms clouds, rains down on land, and flows through rivers back into the ocean. 
        The head of a circular linked list is often referred to as the START node.`
    },
    { que: "Linked list traversal",
        ans: `A list traversal algorithm visits all nodes in the list once and performs an operation on each node. 
        A common traversal operation prints all list nodes. 
        The algorithm starts by pointing a curNode pointer to the list's head node. 
        While curNode is not null, the algorithm prints the current node, and then points curNode to the next node. 
        After the list's tail node is visited, curNode is pointed to the tail node's next node, which does not exist. 
        So, curNode is null, and the traversal ends. 
        The traversal algorithm supports both singly-linked and doubly-linked lists.`
    },
    { que: "array-based list",
        ans: "a list ADT implemented using an array. An array-based list supports the common list ADT operations, such as append, prepend, insert after, remove, and search."
    },
    { que: "stack",
        ans: `an ADT in which items are only inserted on or removed from the top of a stack.
        A stack is referred to as a LAST-IN FIRST-OUT ADT. 
        A stack can be implemented using a linked list, an array, or a vector.`
    },
    { que: "Stack PUSH operation",
        ans: "inserts an item on the top of the stack."
    },
    { que: "Stack POP operation",
        ans: "removes and returns the item at the top of the stack."
    },
    { que: "common Stack ADT operations",
        ans: `Operation: Description = example
        Push(stack, x): Inserts x on top of stack = Push(stack, 44). Stack: 44, 99, 77
        
        Pop(stack): Returns and removes item at top of stack = Pop(stack) returns: 99. Stack: 77
        
        Peek(stack): Returns but does not remove item at top of stack = Peek(stack) returns 99. Stack still: 99, 77
        
        IsEmpty(stack): Returns true if stack has no items = IsEmpty(stack) returns false.
        
        GetLength(stack): Returns the number of items in the stack = GetLength(stack) returns 2.`
    },
    { que: "Queue",
        ans: `An ADT in which items are inserted at the end of the queue and removed from the front of the queue.
        A queue is referred to as a FIRST-IN FIRST-OUT ADT. 
        A queue can be implemented using a linked list or an array.`
    },
    { que: "Enqueue operation",
        ans: "inserts an item at the end of the queue"
    },
    { que: "Dequeue operation",
        ans: "removes and returns the item at the front of the queue."
    },
    { que: "Common queue ADT operations",
        ans: `Operation: Description = example starting w queue 43,12,77(front is 43)
        ---
        Enqueue(queue, x): Inserts x at end of the queue = Enqueue(queue, 56). Queue: 43, 12, 77, 56

        Dequeue(queue): Returns and removes item at front of queue = Dequeue(queue) returns: 43. Queue: 12, 77

        Peek(queue): Returns but does not remove item at the front of the queue = Peek(queue) return 43. Queue: 43, 12, 77

        IsEmpty(queue): Returns true if queue has no items = IsEmpty(queue) returns false.

        GetLength(queue): Returns the number of items in the queue = GetLength(queue) returns 3.`
    },
    { que: "Deque (pronounced 'deck' and short for double-ended queue)",
        ans: `an ADT in which items can be inserted and removed at both the front and back. 
        The deque push-front operation inserts an item at the front of the deque, and the push-back operation inserts at the back of the deque. 
        The pop-front operation removes and returns the item at the front of the deque, and the pop-back operation removes and returns the item at the back of the deque. 
        Ex: After the operations "push-back 7", "push-front 14", "push-front 9", and "push-back 5", "pop-back" returns 5. A subsequent "pop-front" returns 9. 
        A deque can be implemented using a linked list or an array.`
    },
    { que: "Common deque ADT operations (part 1)",
        ans: `Operation: Description = example starting w deque 59,63,19(front is 59)
        ---
        PushFront(deque, x): Inserts x at the front of the deque = PushFront(deque, 41). Deque: 41, 59, 63, 19

        PushBack(deque, x): Inserts x at the back of the deque = PushBack(deque, 41). Deque: 59, 63, 19, 41

        PopFront(deque): Returns and removes item at front of deque = PopFront(deque) returns 59. Deque: 63, 19

        PopBack(deque): Returns and removes item at back of deque = PopBack(deque) returns 19. Deque: 59, 63`
    },
    { que: "Common deque ADT operations (part 2)",
        ans: `Operation: Description = example starting w deque 59,63,19(front is 59)
        PeekFront(deque): Returns but does not remove the item at the front of deque = PeekFront(deque) returns 59. Deque is still: 59, 63, 19

        PeekBack(deque): Returns but does not remove the item at the back of deque = PeekBack(deque) returns 19. Deque is still: 59, 63, 19

        IsEmpty(deque): Returns true if the deque is empty = IsEmpty(deque) returns false.

        GetLength(deque): Returns the number of items in the deque = GetLength(deque) returns 3.`
    },
    { que: "Hash table",
        ans: "a data structure that stores unordered items by mapping (or hashing) each item to a location in an array (or vector)."
    },
    { que: "Hash table item KEY",
        ans: `the value used to map to an index. 
        For all items that might possibly be stored in the hash table, every key is ideally unique, so that the hash table's algorithms can search for a specific item by that key.`
    },
    { que: "Hash table BUCKET",
        ans: "hash table array element"
    },
    { que: "Hash function",
        ans: "computes a bucket index from the item's key."
    },
    { que: "Hash function MODULO OPERATOR %",
        ans: `computes the integer remainder when dividing two numbers. 
        Ex: For a 20 element hash table, a hash function of key % 20 will map keys to bucket indices 0 to 19.
        A hash table's operations of insert, remove, and search each use the hash function to determine an item's bucket. 
        Ex: Inserting 113 first determines the bucket to be 113 % 10 = 3.`
    },
    { que: "Hash table - Collision",
        ans: `occurs when an item being inserted into a hash table maps to the same bucket as an existing item in the hash table. 
        Ex: For a hash function of key % 10, 55 would be inserted in bucket 55 % 10 = 5; later inserting 75 would yield a collision because 75 % 10 is also 5. 
        Various techniques are used to handle collisions during insertions, such as chaining or open addressing.`
    },
    { que: "hash table - Chaining",
        ans: `a collision resolution technique where each bucket has a list of items (so bucket 5's list would become 55, 75).`
    },
    { que: "hash table - Open addressing",
        ans: `a collision resolution technique where collisions are resolved by looking for an empty bucket elsewhere in the table (so 75 might be stored in bucket 6). 
        Such techniques are discussed later in this material.`
    },
    { que: "Chaining",
        ans: `Chaining handles hash table collisions by using a list for each bucket, where each list may store multiple items that map to the same bucket. 
        The insert operation first uses the item's key to determine the bucket, and then inserts the item in that bucket's list. 
        Searching also first determines the bucket, and then searches the bucket's list. 
        Likewise for removes.`
    },
    { que: "Hash Table - Linear probing",
        ans: "handles a collision by starting at the key's mapped bucket, and then linearly searches subsequent buckets until an empty bucket is found."
    },
    { que: "Hash Table - Quadratic probing",
        ans: `handles a collision by starting at the key's mapped bucket, and then quadratically searches subsequent buckets until an empty bucket is found. 
        If an item's mapped bucket is H, the formula (H + c1*i + c2*i^2)modulo(tablesize) is used to determine the item's index in the hash table. 
        c1 and c2 are programmer-defined constants for quadratic probing. 
        Inserting a key uses the formula, starting with i=0, to repeatedly search the hash table until an empty bucket is found. 
        Each time an empty bucket is not found, i is incremented by 1. 
        Iterating through sequential i values to obtain the desired table index is called the PROBING SEQUENCE.`
    },
    { que: "Hash Table - Double hashing",
        ans: `an open-addressing collision resolution technique that uses 2 different hash functions to compute bucket indices. 
        Using hash functions h1 and h2, a key's index in the table is computed with the formula (h1(key)+i*h2(key))modulo(tablesize). 
        Inserting a key uses the formula, starting with i=0, to repeatedly search hash table buckets until an empty bucket is found. 
        Each time an empty bucket is not found, i is incremented by 1. 
        Iterating through sequential i values to obtain the desired table index is called the PROBING SEQUENCE.`
    },
    { que: "Hash Table - Resize operation",
        ans: `increases the number of buckets, while preserving all existing items. 
        A hash table with N buckets is commonly resized to the next prime number ≥ N * 2. 
        A new array is allocated, and all items from the old array are re-inserted into the new array, making the resize operation's time complexity O(N).`
    },
    { que: "Hash Table - Load factor",
        ans: `the number of items in the hash table divided by the number of buckets. 
        Ex: A hash table with 18 items and 31 buckets has a load factor of 18/31=0.58. 
        The load factor may be used to decide when to resize the hash table.`
    },
    { que: "Perfect hash function",
        ans: `maps items to buckets with no collisions. 
        A perfect hash function can be created if the number of items and all possible item keys are known beforehand. 
        The runtime for insert, search, and remove is O(1) with a perfect hash function.`
    },
    { que: "Modulo hash function",
        ans: "uses the remainder from division of the key by hash table size N."
    },
    { que: "Mid-square hash function",
        ans: `squares the key, extracts R digits from the result's middle, and returns the remainder of the middle digits divided by hash table size N. 
        Ex: For a hash table with 100 entries and a key of 453, the decimal (base 10) mid-square hash function computes 453 * 453 = 205209, and returns the middle two digits 52. 
        For N buckets, R must be greater than or equal to [log10N]to index all buckets. 
        The process of squaring and extracting middle digits reduces the likelihood of keys mapping to just a few buckets.`
    },
    { que: "Multiplicative string hash",
        ans: `Repeatedly multiplies the hash value and adds the ASCII (or Unicode) value of each character in the string. 
        A multiplicative hash function for strings starts with a large initial value. 
        For each character, the hash function multiplies the current hash value by a multiplier (often prime) and adds the character's value. 
        Finally, the function returns the remainder of the sum divided by the hash table size N.`
    },
    { que: "Direct hash function",
        ans: `Uses the item's key as the bucket index. 
        Ex: If the key is 937, the index is 937.`
    },
    { que: "Direct access table",
        ans: `A hash table with a direct hash function. 
        Given a key, a direct access table SEARCH algorithm returns the item at index key if the bucket is not empty, and returns null (indicating item not found) if empty.`
    },
    { que: "Binary tree",
        ans: `each node has up to two children, known as a left child and a right child. 
        "Binary" means two, referring to the two children.`
    },
    { que: "Leaf",
        ans: "a tree node with no children"
    },
    { que: "Binary tree INTERNAL node",
        ans: "a node with at least one child"
    },
    { que: "Parent",
        ans: `A node with a child is said to be that child's parent.
        A node's ANCESTORS include the node's parent, the parent's parent, etc., up to the tree's root.`
    },
    { que: "Binary tree ROOT",
        ans: `The one tree node with no parent (the "top" node).`
    },
    { que: "Binary tree EDGE",
        ans: "The link from a node to a child"
    },
    { que: "Binary tree node's DEPTH",
        ans: `the number of edges on the path from the root to the node. 
        The root node thus has depth 0.`
    },
    { que: "Binary tree LEVEL",
        ans: "All nodes with the same depth"
    },
    { que: "Binary tree's HEIGHT",
        ans: "The largest depth of any node. A tree with just one node has height 0."
    },
    { que: "Binary tree is FULL if...",
        ans: "...every node contains 0 or 2 children"
    },
    { que: "Binary tree is COMPLETE if...",
        ans: "...all levels, except possibly the last level, contain all possible nodes and all nodes in the last level are as far left as possible. "
    },
    { que: "Binary tree is PERFECT if...",
        ans: "all internal nodes have 2 children and all leaf nodes are at the same level."
    },
    { que: "binary search tree (BST)",
        ans: `an ordering property that any node's left subtree keys ≤ the node's key, and the right subtree's keys ≥ the node's key. 
        That property enables fast searching for an item, as will be shown later.`
    },
    { que: "BST node's SUCCESSOR",
        ans: "the node that comes after in the BST ordering, so in A B C, A's successor is B, and B's successor is C. "
    },
    { que: "BST node's PREDECESSOR",
        ans: "the node that comes before in the BST ordering"
    },
    { que: "Trie (or prefix tree)",
        ans: `a tree representing a set of strings. 
        Each non-root node represents a single character. 
        Each node has at most one child per distinct alphabet character.
        Tries provide efficient storage and quick search for strings, and are often used to implement auto-complete and predictive text input.`
    },
    { que: "Terminal node",
        ans: "a node that represents a terminating character, which is the end of a string in the trie."
    },
    { que: "AVL tree",
        ans: `a BST with a height balance property and specific operations to rebalance the tree when a node is inserted or removed. 
        This section discusses the balance property; another section discusses the operations. 
        A BST is height balanced if for any node, the heights of the node's left and right subtrees differ by only 0 or 1.`
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
    { que: "",
        ans: ""
    },
  ]