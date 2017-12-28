var uniqueArray = function(arrArg) {
  return arrArg.filter(function(elem, pos,arr) {
    return arr.indexOf(elem) == pos;
  });
};

var uniqEs6 = (arrArg) => {
  return arrArg.filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos;
  });
}

var test = ['paulina','karla','karla','karina'];
var testBis = ['kenya', 'ady', 'desiree'];
console.log(uniqueArray(test.concat(testBis)));
