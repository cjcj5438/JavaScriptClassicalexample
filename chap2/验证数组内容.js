var charSet = ["**","bb","cd","**","cc","--","dd","++"];
//测试函数
function testValue(element,index,array){
    var testExp=/^[a-zA-Z]+$/
    return testExp.test(element)
}
//运行函数
var result=charSet.every(testValue);
console.log(result)

var charSet2 = ["sdf","bb","cd","fasd","cc","df","dd","rtr"];
result=charSet2.every(testValue)
console.log(result)
result=charSet.some(testValue)
console.log(result)
//every() 全满足返回true
// some() 的区别一个满足返回true
//使用 必须满足的条件,则使用every() 否则使用some()
//every 和some 里的回调函数testValue(z,x,c) 可以有三个参数