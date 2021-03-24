var tempArr = [];

function duplicate(arr){
  var arrLength = arr.length; 
  for(var i = 0; i< arrLength;i++){
    tempArr.push(arr[i]);
  }
  for (var j = 0; j< arrLength;j++){
    tempArr.push(arr[j]);
  }
}

duplicate([1,2,3,4,5]);

console.log( tempArr );