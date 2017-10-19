var charSet = ["af","bb","cd","af","cc","af","dd","af"];
function replaceElement(element,index,array) {
    //if(element=="af") array[index]="**";
    (element=="af")&&(array[index]="**")
}
charSet.forEach(replaceElement);
console.log(charSet)
//TODO:思路是用forEach()每个元素都执行了   replaceElement()  函数,
// forEach会改变原来的数组,
//使用map 的话就不会改变原来的数组, 所以要用变量保存取来

//扩展 有时候我们写语句的时候直接是if() ....  不用{ } 符号,
//这里有种更快的方法,(element=="af")&&(array[index]="**")