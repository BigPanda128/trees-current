load('binaryTree-fixedFind.js');

function BST() {
  BT.call(this);
  }

BST.prototype = Object.create(BT.prototype);

BST.prototype.getMin = function() {
 var current = this.root;
 while (current.left !== null) {
 current = current.left;
 }
 return current.data;
}

BST.prototype.getMax = function() {
 var current = this.root;
 while (current.right !== null) {
 current = current.right;
 }
 return current.data;
}

BST.prototype.find = function(data) {
 var current = this.root;
   while (current && current.data != data) {
     if (data < current.data) {
       current = current.left;
       }
     else {
       current = current.right;
       }
   }
 return current;
}

BST.prototype.remove = function(data) {
 root = this.removeNode(this.root, data);
}

BST.prototype.removeNode = function(node, data) {
 if (node === null) {
   return null;
   }
 if (data == node.data) {
   // node has no children
   if (node.left === null && node.right === null) {
     return null;
     }
 // node has no left child
 if (node.left === null) {
   return node.right;
   }
 // node has no right child
 if (node.right === null) {
   return node.left;
   }
 // node has two children
 var tempNode = getSmallest(node.right);
 node.data = tempNode.data;
 node.right = this.removeNode(node.right, tempNode.data);
 return node;
}
 else if (data < node.data) {
   node.left = this.removeNode(node.left, data);
   return node;
   }
 else {
   node.right = this.removeNode(node.right, data);
   return node;
   }
}

BST.prototype.update = function(data) {
 var value = this.find(data);
 value.count++;
 return value;
}

BST.prototype.insert = function(data) {
 var n = new Node(data, null, null);
 if (this.root === null) {
   this.root = n;
   }
 else {
   var current = this.root;
   var parent;
   while (true) {
     parent = current;
     if (data < current.data) {
       current = current.left;
       if (current === null) {
         parent.left = n;
         break;
         }
     }
   else {
     current = current.right;
     if (current === null) {
       parent.right = n;
       break;
       }
     }
   }
 }
}

