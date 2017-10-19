// 什么是函数编程: 一个函数接受另一个函数的作为参数,或者返回一个函数,或者前两者都具备

//需求:实现一个函数, 递归实现一个数组,并且返回一个反向的数组的字符串
var reverseArray = function (x, indx, str) {
    return indx == 0 ? str :
        reverseArray(x, --indx, (str += " " + x[indx]));
}

var arr = ['apple', 'orange', 'peach', 'lime'];
var str = reverseArray(arr, arr.length, "");
console.log(str);

var arr2 = ['car', 'boat', 'sun', 'computer'];
str = reverseArray(arr2, arr2.length, "");
console.log(str);
