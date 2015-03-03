load("binaryTree-fixedFind.js");
// load("bst.js");
var nums = new BT();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
inOrder(nums.root);
print("\n");
preOrder(nums.root);
print("\n");
postOrder(nums.root);
print("\n");
print('Height of this tree: ' + nums.height(nums.root));
write("Enter a value to search for: ");
var value = parseInt(readline());
var found = nums.find(value);
if (found !== null) {
 print("Found " + value + " in the BST.");
}
else {
 print(value + " was not found in the BST.");
}
