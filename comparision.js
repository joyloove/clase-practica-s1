var areArraysSame = function (array1, array2){

 if (array1.length === array2.length){

   for (var i=0; i< array2.length; i++){

     if (array1[i] !== array2[i])
       return false;

   }

   return true;

 }

 return false;
}

console.log(areArraysSame([2,5,3,8,1],[2,5,3,8,9]))
