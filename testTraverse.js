load("binaryTree.js");
load("traverse.js");

var nums = new BT();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
// Added Capouch next two lines
//nums.insert(70);
print("Height of tree: " + nums.height(nums.root));
print("root node is: " + nums.root.left.right.data);
print("Inorder traversal: ");
nums.inOrder(nums.root);
print();
print("Preorder traversal: ");
nums.preOrder(nums.root);
print();
print("Postorder traversal: ");
nums.postOrder(nums.root);
print();
