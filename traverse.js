function inOrder(node) {
 if (node !== null) {
   inOrder(node.left);
   write(node.show() + " ");
   inOrder(node.right);
   }
}

function preOrder(node) {
 if (node !== null) {
   write(node.show() + " ");
   preOrder(node.left);
   preOrder(node.right);
 }
}

function postOrder(node) {
 if (node !== null) {
   postOrder(node.left);
   postOrder(node.right);
   write(node.show() + " ");
 }
}
