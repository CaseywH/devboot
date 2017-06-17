//prob 1
//
var colors = ["red", "blur", "green"];

Array.prototype.myForEach = function(func) {
for (var i = 0; i < this.length; i++) {
   func(this[i]);
  }
};
