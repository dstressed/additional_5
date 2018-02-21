module.exports = function check(str, bracketsConfig) {
  var arr = str.split('');
  if (arr.length % 2) return false;
  outer: for (var i = 0; i < arr.length; i++) {
      var substr = arr[i] + '' + arr[i + 1];
      for (var n = 0; n < brack.length; n++) {
          if (substr == brack[n].join('')) {
              arr.splice(i, 2);
              i -= 2;
              continue outer;
          }
      }
  }
  if (arr.length) return false;
  else return true;
};
