var dtstr= "2014-3-04T19:35:32Z";

dtstr = dtstr.replace(/\D/g," "); //TODO:\D匹配非数字的字符 同时替换成空字符串
var dtcomps = dtstr.split(" ");

// modify month between 1 based ISO 8601 and zero based Date
// debugger;
debug
dtcomps[1]--;//月份减一

var convdt = new Date(Date.UTC.apply(null,dtcomps));

console.log(convdt.toString()); // Tue, 04 Mar 2014 19:35:32 GMT
