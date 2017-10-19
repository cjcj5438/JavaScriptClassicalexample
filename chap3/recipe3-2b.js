//需求:实现一个函数, 递归实现一个数组,并且返回一个正向的数组的字符串
var orderArray = function(x,indx,str) {
  return indx == x.length-1 ? str : orderArray(x,++indx,(str+=x[indx] + " "));
}

var arr = ['apple','orange','peach','lime'];
var str = orderArray(arr,-1,"");
console.log(str);
