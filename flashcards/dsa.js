const flashcards = [
    { que: "GeeksForGeeks Linear Data Structure",
        ans: "https://www.geeksforgeeks.org/dsa/introduction-to-linear-data-structures/"
    },
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
    { que: "Heuristic",
        ans: "A technique that willingly accepts a non-optimal or less accurate solution in order to improve execution speed."
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
        ans: `Algorithm takes 2 strings as input and determines the longest substring that exists in both strings.
        The algorithm uses dynamic programming. 
        An N x M integer matrix keeps track of matching substrings, where N is the length of the first string and M the length of the second. 
        Each row represents a character from the first string, and each column represents a character from the second string.`
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
    { que: "Dummy node (header node)", 
        ans: "A node with an unused data member that always resides at the head of the list and cannot be removed. Using a dummy node simplifies the algorithms for a linked list because the head and tail pointers are never null."
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
    { que: "Hash table COLLISION",
        ans: `occurs when an item being inserted into a hash table maps to the same bucket as an existing item in the hash table. 
        Ex: For a hash function of key % 10, 55 would be inserted in bucket 55 % 10 = 5; later inserting 75 would yield a collision because 75 % 10 is also 5. 
        Various techniques are used to handle collisions during insertions, such as chaining or open addressing.`
    },
    { que: "hash table CHAINING",
        ans: `a collision resolution technique where each bucket has a list of items (so bucket 5's list would become 55, 75).`
    },
    { que: "hash table OPEN ADDRESSING",
        ans: `a collision resolution technique where collisions are resolved by looking for an empty bucket elsewhere in the table (so 75 might be stored in bucket 6). 
        Such techniques are discussed later in this material.`
    },
    { que: "Chaining",
        ans: `Chaining handles hash table collisions by using a list for each bucket, where each list may store multiple items that map to the same bucket. 
        The insert operation first uses the item's key to determine the bucket, and then inserts the item in that bucket's list. 
        Searching also first determines the bucket, and then searches the bucket's list. 
        Likewise for removes.`
    },
    { que: "Hash Table LINEAR probing",
        ans: "handles a collision by starting at the key's mapped bucket, and then linearly searches subsequent buckets until an empty bucket is found."
    },
    { que: "Hash Table QUADRATIC probing",
        ans: `handles a collision by starting at the key's mapped bucket, and then quadratically searches subsequent buckets until an empty bucket is found. 
        If an item's mapped bucket is H, the formula (H + c1*i + c2*i^2)modulo(tablesize) is used to determine the item's index in the hash table. 
        c1 and c2 are programmer-defined constants for quadratic probing. 
        Inserting a key uses the formula, starting with i=0, to repeatedly search the hash table until an empty bucket is found. 
        Each time an empty bucket is not found, i is incremented by 1. 
        Iterating through sequential i values to obtain the desired table index is called the PROBING SEQUENCE.`
    },
    { que: "Hash Table DOUBLE HASHING",
        ans: `an open-addressing collision resolution technique that uses 2 different hash functions to compute bucket indices. 
        Using hash functions h1 and h2, a key's index in the table is computed with the formula (h1(key)+i*h2(key))modulo(tablesize). 
        Inserting a key uses the formula, starting with i=0, to repeatedly search hash table buckets until an empty bucket is found. 
        Each time an empty bucket is not found, i is incremented by 1. 
        Iterating through sequential i values to obtain the desired table index is called the PROBING SEQUENCE.`
    },
    { que: "Hash Table RESIZE operation",
        ans: `increases the number of buckets, while preserving all existing items. 
        A hash table with N buckets is commonly resized to the next prime number ≥ N * 2. 
        A new array is allocated, and all items from the old array are re-inserted into the new array, making the resize operation's time complexity O(N).`
    },
    { que: "Hash Table LOAD FACTOR",
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
        A node's ANCESTORS include the node's parent, the parent's parent, etc., ALL THE WAY UP to the tree's root.`
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
        A BST is HEIGHT BALANCED if for any node, the heights of the node's left and right subtrees differ by only 0 or 1.`
    },
    { que: "Red-black tree",
        ans: `a BST with two node types, namely red and black, and supporting operations that ensure the tree is balanced when a node is inserted or removed. 
        The below red-black tree's requirements ensure that a tree with N nodes will have a height of O(log N).
        Every node is colored either red or black.
        The root node is black.
        A red node's children cannot be red.
        A null child is considered to be a black leaf node.
        All paths from a node to any null leaf descendant node must have the same number of black nodes.`
    },
    { que: "Max-heap",
        ans: `a complete binary tree that maintains the simple property that a node's key is greater than or equal to the node's children's keys. 
        (Actually, a max-heap may be any tree, but is commonly a binary tree). 
        Because x ≥ y and y ≥ z implies x ≥ z, the property results in a node's key being greater than or equal to all the node's descendants' keys. 
        Therefore, a max-heap's root always has the maximum key in the entire tree.`
    },
    { que: "Max-heap insert and remove operations",
        ans: `An INSERT into a max-heap starts by inserting the node in the tree's last level, and then swapping the node with its parent until no max-heap property violation occurs. 
        Inserts fill a level (left-to-right) before adding another level, so the tree's height is always the minimum possible. 
        The upward movement of a node in a max-heap is called PERCOLATING.
        A REMOVE from a max-heap is always a removal of the root, and is done by replacing the root with the last level's last node, and swapping that node with its greatest child until no max-heap property violation occurs. 
        Because upon completion that node will occupy another node's location (which was swapped upwards), the tree height remains the minimum possible.`
    },
    { que: "Min-heap",
        ans: "Similar to a max-heap, but a node's key is less than or equal to its children's keys."
    },
    { que: "Heaps using arrays",
        ans: `Heaps are typically stored using arrays. 
        Given a tree representation of a heap, the heap's array form is produced by traversing the tree's levels from left to right and top to bottom. 
        The root node is always the entry at index 0 in the array, the root's left child is the entry at index 1, the root's right child is the entry at index 2, and so on.`
    },
    { que: "Parent and child indices for HEAP example:",
        ans: `Node index: Parent index -> Child indices...
        0: n/a -> 1,2
        1: 0 -> 3,4
        2: 0 -> 5,6
        3: 1 -> 7,8
        4: 1 -> 9,10
        5: 2 -> 11,12
        i: (i-1)/2 -> 2*i+1, 2*i+2`
    },
    { que: "Heapsort",
        ans: `a sorting algorithm that takes advantage of a max-heap's properties by repeatedly removing the max and building a sorted array in reverse order. 
        An array of unsorted values must first be converted into a heap.`
    },
    { que: "Heapify operation",
        ans: `used to turn an array into a heap. 
        Since leaf nodes already satisfy the max heap property, heapifying to build a max-heap is achieved by percolating down on every non-leaf node in reverse order.`
    },
    { que: "Priority queue abstract data type (ADT)",
        ans: "a queue where each item has a priority, and items with higher priority are closer to the front of the queue than items with lower priority."
    },
    { que: "priority queue ENQUEUE operation",
        ans: "inserts an item such that the item is closer to the front than all items of lower priority, and closer to the end than all items of equal or higher priority."
    },
    { que: "priority queue DEQUEUE operation",
        ans: "removes and returns the item at the front of the queue, which has the highest priority."
    },
    { que: "Common priority queue operations",
        ans: `Operation: Description = ex: PQueue: 42,61,98 (front->42)
        Enqueue(PQueue, x): Inserts x after all equal or higher priority items = 
        Enqueue(PQueue, 87). PQueue: 42, 61, 87, 98
        
        Dequeue(PQueue): Returns and removes the item at the front of PQueue =
        Dequeue(PQueue) returns 42. PQueue: 61, 98
        
        Peek(PQueue): Returns but does not remove the item at the front of PQueue =
        Peek(PQueue) returns 42. PQueue: 42, 61, 98
        
        IsEmpty(PQueue): Returns true if PQueue has no items =
        IsEmpty(PQueue) returns false.
        
        GetLength(PQueue): Returns the number of items in PQueue =
        GetLength(PQueue) returns 3.`
    },
    { que: "Treap",
        ans: `uses a main key that maintains a binary search tree ordering property, and a secondary key generated randomly (often called "priority") during insertions that maintains a heap property. 
        The combination usually keeps the tree balanced. 
        The word "treap" is a mix of tree and heap.`
    },
    { que: "Treap SEARCH",
        ans: "the same as a BST search using the main key, since the treap is a BST."
    },
    { que: "Treap INSERT",
        ans: "A treap insert initially inserts a node as in a BST using the main key, then assigns a random priority to the node, and percolates the node up until the heap property is not violated. In a heap, a node is moved up via a swap with the node's parent. In a treap, a node is moved up via a rotation at the parent. Unlike a swap, a rotation maintains the BST property."
    },
    { que: "Treap DELETE",
        ans: "can be done by setting the node's priority such that the node should be a leaf (-∞ for a max-heap), percolating the node down using rotations until the node is a leaf, and then removing the node."
    },
    { que: "SET abstract data type (ADT)",
        ans: `a collection of distinct elements.
        A set ADD operation adds an element to the set, provided an equal element doesn't already exist in the set. 
        A set is an unordered collection. 
        Ex: The set with integers 3, 7, and 9 is equivalent to the set with integers 9, 3 and 7.`
    },
    { que: "Set KEY VALUE",
        ans: `When storing objects, set implementations commonly distinguish elements based on an element's KEY VALUE: A primitive data value that serves as a unique identifier for the element. 
        Ex: An object for a student at a university may store information such as name, phone number, and ID number. 
        No two students will have the same ID number, so the ID number can be used as the student object's key.`
    },
    { que: "Set REMOVE",
        ans: "Given a key, a set REMOVE operation removes the element with the specified key from the set."
    },
    { que: "Set SEARCH & SUBSET",
        ans: `Given a key, a set SEARCH operation returns the set element with the specified key, or null if no such element exists. 
        The search operation can be used to implement a subset test. 
        A set X is a SUBSET of set Y only if every element of X is also an element of Y.`
    },
    { que: "Set UNION",
        ans: `The UNION of sets X and Y, denoted as X ∪ Y, is a set that contains every element from X, every element from Y, and no additional elements. 
        Ex: { 54, 19, 75 } ∪ { 75, 12 } = { 12, 19, 54, 75 }.`
    },
    { que: "Set INTERSECTION",
        ans: `The INTERSECTION of sets X and Y, denoted as X ∩ Y, is a set that contains every element that is in both X and Y, and no additional elements. 
        Ex: { 54, 19, 75 } ∩ { 75, 12 } = { 75 }.`
    },
    { que: "Set DIFFERENCE",
        ans: `The DIFFERENCE of sets X and Y, denoted as X \ Y, is a set that contains every element that is in X but not in Y, and no additional elements. 
        Ex: { 54, 19, 75 } \ { 75, 12 } = { 54, 19 }.`
    },
    { que: "Set UNION, INTERSECTION, DIFFERENCE",
        ans: `The union and intersection operations are commutative, so X ∪ Y = Y ∪ X and X ∩ Y = Y ∩ X. 
        The difference operation is not commutative.`
    },
    { que: "Set example...",
        ans: `set1 = { 93,61,82,76 }
        set2 = { 82,23,46,93 }
        
        SetUnion(set1,set2) => {93,61,82,76,23,46}
        SetIntersection(set1,set2) => {93,82}
        SetDifference(set1,set2) => {61,76}
        SetDifference(set2,set1) => {23,76}`
    },
    { que: "Dynamic + Static set operations",
        ans: `A dynamic set is a set that can change after being constructed. 
        A static set is a set that doesn't change after being constructed. 
        A collection of elements is commonly provided during construction of a static set, each of which is added to the set. 
        Ex: A static set constructed from the list of integers (19, 67, 77, 67, 59, 19) would be { 19, 67, 77, 59 }.
        Static sets support most set operations by returning a new set representing the operation's result. 
        The table below summarizes the common operations for static and dynamic sets.`
    },
    { que: "Static+Dynamic (Add+Remove set operations)",
        ans: "does NOT support STATIC set support"
    },
    { que: "Graph",
        ans: "a data structure for representing connections among items, and consists of vertices connected by edges."
    },
    { que: "vertex (or node)",
        ans: "represents an item in a graph."
    },
    { que: "edge",
        ans: "represents a connection between two vertices in a graph."
    },
    { que: "Adjacency and paths",
        ans: `Two vertices are ADJACENT if connected by an edge.
        A PATH is a sequence of edges leading from a source (starting) vertex to a destination (ending) vertex. 
        The PATH LENGTH is the number of edges in the path.
        The DISTANCE between two vertices is the number of edges on the shortest path between those vertices.`
    },
    { que: "Graph representations: Adjacency lists",
        ans: `Various approaches exist for representing a graph data structure. 
        A common approach is an adjacency list. 
        Recall that two vertices are ADJACENT if connected by an edge. 
        In an ADJACENCY LIST graph representation, each vertex has a list of adjacent vertices, each list item representing an edge.`
    },
    { que: "Graph representations: Adjacency matrices",
        ans: `Various approaches exist for representing a graph data structure. 
        One approach is an adjacency matrix. 
        Recall that two vertices are adjacent if connected by an edge. 
        In an adjacency matrix graph representation, each vertex is assigned to a matrix row and column, and a matrix element is 1 if the corresponding two vertices have an edge or is 0 otherwise.`
    },
    { que: "Graph traversal: Breadth-first search (BFS)",
        ans: "a traversal that visits a starting vertex, then all vertices of distance 1 from that vertex, then of distance 2, and so on, without revisiting a vertex."
    },
    { que: "Directed graph (or digraph)",
        ans: "consists of vertices connected by directed edges. "
    },
    { que: "Directed edge",
        ans: `a connection between a starting vertex and a terminating vertex.
        In a directed graph, a vertex Y is adjacent to a vertex X, if there is an edge from X to Y.
        Many graphs are directed, like those representing links between web pages, maps for navigation, or college course prerequisites.`
    },
    { que: "Directed graph - PATH",
        ans: "a sequence of directed edges leading from a source (starting) vertex to a destination (ending) vertex."
    },
    { que: "Directed graph - CYCLE",
        ans: "a path that starts and ends at the same vertex."
    },
    { que: "Directed graph - CYCLIC v ACYCLIC",
        ans: "A directed graph is CYCLIC if the graph contains a cycle, and ACYCLIC if the graph does not contain a cycle."
    },
    { que: "Weighted graph",
        ans: "A WEIGHTED GRAPH associates a weight with each edge. A graph edge's WEIGHT, or COST, represents some numerical value between vertex items, such as flight cost between airports, connection speed between computers, or travel time between cities. A weighted graph may be directed or undirected."
    },
    { que: "Weighted graph - PATH LENGTH",
        ans: "In a weighted graph, the PATH LENGTH is the sum of the edge weights in the path."
    },
    { que: "Weighted graph - NEGATIVE EDGE WEIGHT CYCLES",
        ans: `The cycle length is the sum of the edge weights in a cycle. 
        A negative edge weight cycle has a cycle length less than 0. 
        A shortest path does not exist in a graph with a negative edge weight cycle, because each loop around the negative edge weight cycle further decreases the cycle length, so no minimum exists.`
    },
    { que: "Topological sort",
        ans: "A TOPOLOGICAL SORT of a directed, acyclic graph produces a list of the graph's vertices such that for every edge from a vertex X to a vertex Y, X comes before Y in the list."
    },
    { que: "Minimum spanning tree",
        ans: `A graph's minimum spanning tree is a subset of the graph's edges that connect all vertices in the graph together with the minimum sum of edge weights. 
        The graph must be weighted and connected. 
        A connected graph contains a path between every pair of vertices.`
    },
    { que: "B-trees",
        ans: `In a binary tree, each node has one key and up to two children. 
        A B-tree with order K is a tree where nodes can have up to K-1 keys and up to K children. 
        The order is the maximum number of children a node can have. 
        Ex: In a B-tree with order 4, a node can have 1, 2, or 3 keys, and up to 4 children.`
    },
    { que: "B-trees have the following properties:",
        ans: `All keys in a B-tree must be distinct.
        All leaf nodes must be at the same level.
        An internal node with N keys must have N+1 children.
        Keys in a node are stored in sorted order from smallest to largest.
        Each key in a B-tree internal node has one left subtree and one right subtree. All left subtree keys are < that key, and all right subtree keys are > that key.`
    },
    { que: "2-3-4 tree node labels",
        ans: `A node with one key is called a 2-node. 
        A node with two keys is called a 3-node. 
        A node with three keys is called a 4-node.`
    },
    { que: "Linear search",
        ans: "a search algorithm that starts from the beginning of a list, and checks each element until the search key is found or the end of the list is reached."
    },
    { que: "Binary search",
        ans: `a faster algorithm for searching a list if the list's elements are sorted and directly accessible. 
        Binary search first checks the middle element of the list. 
        If the search key is found, the algorithm returns the matching location. 
        If the search key is not found, the algorithm repeats the search on the remaining left sublist (if the search key was less than the middle element) or the remaining right sublist (if the search key was greater than the middle element).`
    },
    { que: "constant time operation",
        ans: "an operation that, for a given processor, always operates in the same amount of time, regardless of input values."
    },
    { que: "Asymptotic notation",
        ans: `the classification of runtime complexity that uses functions that indicate only the growth rate of a bounding function. 
        Three asymptotic notations are commonly used in complexity analysis:
        O notation provides a growth rate for an algorithm's UPPER bound.
        Ω notation provides a growth rate for an algorithm's LOWER bound.
        Θ notation provides a growth rate that is BOTH an upper and lower bound.`
    },
    { que: "Big O notation",
        ans: "a mathematical way of describing how a function (running time, or runtime, of an algorithm) behaves in relation to the input size. In Big O notation, all functions that have the same growth rate (as determined by the highest order term) are characterized using the same Big O notation. In essence, all functions that have the same growth rate are considered equivalent in Big O notation."
    },
    { que: "Growth rates: best on top, worst at bottom",
        ans: `log2N
        N
        Nlog2N
        N^2
        N^3
        2^N`
    },
    { que: "O(1) Constant",
        ans:   `def find_min(x,y):
        if x<y: return x else return y`
    },
    { que: "O(logN) Logarithmic",
        ans: `def binary_search(numbers,key):
        low=0
        high=len(numbers)-1
        
        while high>low:
        mid=(high+low)//2
        if numbers[mid]<key:
        low=mid+1
        elif numbers[mid]>key:
        high=mid-1
        else: return mid
        
        return -1 #not found`
    },
    { que: "O(N) Linear",
        ans: `def linear_search(numbers, key):
        for i in range(len(numbers)):
        if numbers[i]==key:
        return i
        
        return -1 #not found`
    },
    { que: "O(NlogN) Log-linear",
        ans: `def merge_sort(numbers,i,k):
        if i<k:
        j=(i+k)//2 #find midpoint
        merge_sort(numbers,i,j) #sort left part
        merge_sort(numbers,j+1,k) #sort right part
        merge(numbers,i,j,k) #merge parts`
    },
    { que: "O(N^2) Quadratic",
        ans: `def selection_sort(numbers):
        for i in range(len(numbers)):
        index_smallest=i
        for j in range(i+1,len(numbers)):
        if numbers[j]<numbers[index_smallest]:
        index_smallest=j
        
        temp=numbers[i]
        numbers[i]=numbers[index_smallest]
        numbers[index_smallest]=temp`
    },
    { que: "O(c^N) Exponential",
        ans: `def fibonacci(N):
        if (1==N) or (2==N):
        return N
        
        return fibonacci(N-1)+fibonacci(N-2)`
    },
    { que: "Algorithm efficiency",
        ans: "typically measured by the algorithm's computational complexity"
    },
    { que: "Computational complexity",
        ans: "the amount of resources used by the algorithm. The most common resources considered are the RUNTIME and MEMORY usage."
    },
    { que: "Runtime complexity",
        ans: "is a function, T(N), that represents the number of constant time operations performed by the algorithm on an input of size N."
    },
    { que: "Space complexity",
        ans: `is a function, S(N), that represents the number of fixed-size memory units used by the algorithm for an input of size N. 
        Ex: The space complexity of an algorithm that duplicates a list of numbers is S(N) = 2N + k, where k is a constant representing memory used for things like the loop counter and list pointers.`
    },
    { que: "Auxiliary space complexity",
        ans: `the space complexity not including the input data. 
        Ex: An algorithm to find the maximum number in a list will have a space complexity of S(N) = N + k, but an auxiliary space complexity of S(N) = k, where k is a constant.`
    },
    { que: "Recursive algorithm",
        ans: "an algorithm that breaks the problem into smaller subproblems and applies the algorithm itself to solve the smaller subproblems."
    },
    { que: "Base case",
        ans: `Because a problem cannot be endlessly divided into smaller subproblems, a recursive algorithm must have a BASE CASE: 
        A case where a recursive algorithm completes without applying itself to a smaller subproblem.`
    },
    { que: "recursive function",
        ans: "a function that calls itself. Recursive functions are commonly used to implement recursive algorithms."
    },
    { que: "Binary search",
        ans: `an algorithm that searches a sorted list for a key by first comparing the key to the middle element in the list and recursively searching half of the remaining list so long as the key is not found.
        Binary search first checks the middle element of the list. 
        If the search key is found, the algorithm returns the index. 
        If the search key is not found, the algorithm recursively searches the remaining left sublist (if the search key was less than the middle element) or the remaining right sublist (if the search key was greater than the middle element).`
    },
    { que: "BinarySearch RECURSIVE algo:...",
        ans: `BinarySearch(numbers,low,high,key) {
        if (low>high)
        return -1
        
        mid=(low+high)/2
        if (numbers[mid]<key) {
        return BinarySearch(numbers,mid+1,high,key)
        }
        else if (numbers[mid]>key){
        return BinarySearch(numbers,low,mid-1,key)
        }
        return mid}`
    },
    { que: "Fast sorting algorithm",
        ans: "A sorting algorithm that has an average runtime complexity of O(NlogN) or better"
    },
    { que: "Sorting algorithm: Runtime complexity - Fast?...",
        ans: `Selection sort: O(N^2) - No
        Insertion sort: O(N^2) - No
        Shell sort: O(N^1.5) - No
        Quicksort: O(NlogN) - Yes
        Merge sort: O(NlogN) - Yes
        Heap sort: O(NlogN) - Yes
        Radix sort: O(N) - Yes`
    },
    { que: "element comparison sorting algorithm",
        ans: `a sorting algorithm that operates on an array of elements that can be compared to each other. 
        Ex: An array of strings can be sorted with a comparison sorting algorithm, since two strings can be compared to determine if the one string is less than, equal to, or greater than another string. 
        Selection sort, insertion sort, shell sort, quicksort, merge sort, and heap sort are all comparison sorting algorithms. 
        Radix sort, in contrast, subdivides each array element into integer digits and is not a comparison sorting algorithm.`
    },
    { que: "Selection sort",
        ans: `a sorting algorithm that treats the input as two parts, sorted and unsorted, and repeatedly selects the proper next value to move from the unsorted part to the end of the sorted part.
        Best, Avg, Worst: O(n^2)`
    },
    { que: "Insertion sort",
        ans: `a sorting algorithm that treats the input as two parts, sorted and unsorted, and repeatedly inserts the next value from the unsorted part into the correct location in the sorted part.
        Best: O(n), Avg, Worst: O(n^2)`
    },
    { que: "Shell sort",
        ans: "a sorting algorithm that treats the input as a collection of interleaved lists, and sorts each list individually with a variant of the insertion sort algorithm. Shell sort uses gap values to determine the number of interleaved lists."
    },
    { que: "Shell sort - gap value",
        ans: "a positive integer representing the distance between elements in an interleaved list. For each interleaved list, if an element is at index i, the next element is at index i + gap value."
    },
    { que: "Quicksort",
        ans: `sorting algorithm that repeatedly partitions the input into low and high parts (each unsorted), and then recursively sorts each of those parts. 
        To partition the input, quicksort chooses a pivot to divide the data into low and high parts.
        Best, Avg: O(nlogn), Worst: O(n^2)`
    },
    { que: "Quicksort - pivot",
        ans: `can be any value within the array, commonly the value of the middle array element. 
        Ex: For the list [4, 34, 10, 25, 1], the middle element is located at index 2 (the middle of indices 0..4) and has a value of 10.
        To partition the input, the quicksort algorithm divides the array into two parts: the low partition and the high partition. 
        All values in the low partition are less than or equal to the pivot value. 
        All values in the high partition are greater than or equal to the pivot value. 
        The values in each partition are not necessarily sorted. 
        Ex: Partitioning [4, 34, 10, 25, 1] with a pivot value of 10 results in a low partition of [4, 1, 10] and a high partition of [34, 25]. 
        Values equal to the pivot may appear in either or both of the partitions.`
    },
    { que: "Merge sort",
        ans: `a sorting algorithm that divides a list into two halves, recursively sorts each half, and then merges the sorted halves to produce a sorted list. 
        The recursive partitioning continues until a list of one element is reached, as a list of one element is already sorted.`
    },
    { que: "Merge sort cont...",
        ans: `Merge sort merges the two sorted partitions into a single list by repeatedly selecting the smallest element from either the left or right partition and adding that element to a temporary merged list. 
        Once fully merged, the elements in the temporary merged list are copied back to the original list.
        Best, Avg, Worse: O(nlogn)`
    },
    { que: "Radix sort",
        ans: "a sorting algorithm designed specifically for integers. The algorithm makes use of a concept called buckets and is a type of bucket sort."
    },
    { que: "Radix sort - bucket",
        ans: `Any array of integer values can be subdivided into buckets by using the integer values' digits. 
        A bucket is a collection of integer values that all share a particular digit value. 
        Ex: Values 57, 97, 77, and 17 all have a 7 as the 1's digit, and would all be placed into bucket 7 when subdividing by the 1's digit.`
    },
    { que: "Radix sort",
        ans: `a sorting algorithm specifically for an array of integers: The algorithm processes one digit at a time starting with the least significant digit and ending with the most significant. 
        Two steps are needed for each digit. 
        First, all array elements are placed into buckets based on the current digit's value. 
        Then, the array is rebuilt by removing all elements from buckets, in order from lowest bucket to highest.`
    },
    { que: "Bubble sort",
        ans: `A sorting algorithm that iterates through a list, comparing and swapping adjacent elements if the second element is less than the first element. 
        Bubble sort uses nested loops. Given a list with N elements, the outer i-loop iterates N - 1 times. Each iteration moves the ith largest element into sorted position. The inner j-loop iterates through all adjacent pairs, comparing and swapping adjacent elements as needed, except for the last i pairs that are already in the correct position.
        Because of the nested loops, bubble sort has a runtime of O(N^2). Bubble sort is often considered impractical for real-world use because many faster sorting algorithms exist.
        Best: O(n^2), Avg: O(n^2), Worst: O(n^2)`
    },
    { que: "Quickselect",
        ans: `An algorithm that selects the kth smallest element in a list. 
        Ex: Running quickselect on the list (15, 73, 5, 88, 9) with k = 0, returns the smallest element in the list, or 5.`
    },
    { que: "Quickselect cont...",
        ans: `For a list with N elements, quickselect uses quicksort's partition function to partition the list into a low partition containing the X smallest elements and a high partition containing the N-X largest elements. 
        The kth smallest element is in the low partition if k is ≤ the last index in the low partition, and in the high partition otherwise. 
        Quickselect is recursively called on the partition that contains the kth element. 
        When a partition of size 1 is encountered, quickselect has found the kth smallest element.`
    },
    { que: "Quickselect cont...pt3",
        ans: "Quickselect partially sorts the list when selecting the kth smallest element."
    },
    { que: "Quickselect cont...pt4",
        ans: `The best case and average runtime complexity of quickselect are both O(N). 
        In the worst case, quickselect may sort the entire list, resulting in a runtime of O(N^2).`
    },
    { que: "Bucket sort",
        ans: "a numerical sorting algorithm that distributes numbers into buckets, sorts each bucket with an additional sorting algorithm, and then concatenates buckets together to build the sorted result."
    },
    { que: "Bucket sort - bucket",
        ans: `a container for numerical values in a specific range. 
        Ex: All numbers in the range 0 to 49 may be stored in a bucket representing this range. 
        Bucket sort is designed for arrays with non-negative numbers.`
    },
    { que: "Big O Complexity for sorting algorithm",
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
