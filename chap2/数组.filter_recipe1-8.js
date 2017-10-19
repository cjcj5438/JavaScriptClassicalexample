var charSet = ["**","bb","cd","**","cc","**","dd","**"];

var newArray = charSet.filter(function(element) {
    return (element !== "**");
});
    
console.log(newArray); // ["bb", "cd", "cc", "dd"]
//TODO:这个函数filter() 返回时true 添加元素, false的话就不添加元素,
// 参数有三个, 分别是 数组元素, 可选,key值,最初的数组,