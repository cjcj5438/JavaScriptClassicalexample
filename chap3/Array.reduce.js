var nums=[23,54,454,66]
var sum=nums.reduce(function (n1, n2) {
    return n1*n2
})
console.log(sum)
//todo 解读 n1 和n2 参数  初始是数组的前两个参数,
// n1=n1*n2 (把运算的后的值都会累加到n1 上.)