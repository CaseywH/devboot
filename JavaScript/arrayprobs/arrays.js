//prob 1
function printReverse(arr) {
  var newArr = [];
  for (var i = (arr.length - 1); i > -1; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
}



function isUniform(arr) {
  var cornerS = arr[0];
  for (var i = 1; i < arr.length; i++){
    if (cornerS != arr[i]) {
      return false;
    }
  }
  return true;
}


function sumAray(arr) {
  var sum = 0;
  arr.forEach(function(num){
    sum = sum + num;
  });
  return sum;
}

function max(arr) {
  var maxNum = arr[0];
  arr.forEach(function(num){
    if (num > maxNum) {
      maxNum = num;
    }
  });
  return maxNum;
}
