var http = require('http'),
    fs = require('fs'),
    url = require('url');
/*创建http服务器*/
http.createServer(function (req, res) {
    //获取客户端的url请求路径
    var pathname = url.parse(req.url).pathname;
    //打印req中的数据
    console.log("请求url" + req.url)
    console.log("请求method" + req.method)
    console.log("请求headers" + req.headers)
    // console.log(req)
    switch (pathname) {
        case '/index':resIndex(res);
            break;
        case '/img':resImage(res);
            break;
        default:resDefault(res);
            break
    }
}).listen(1337)
/**
 * 创建resIndex相应的html页面
 * @param res
 */
function resIndex(res) {
    var readPath = __dirname + '/' + url.parse('index.html').pathname;
    var indexPage = fs.readFileSync(readPath)
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(indexPage)
}
function resImage(res) {
    var readPath = __dirname + '/' + url.parse('logo.png').pathname;
    var indexPage = fs.readFileSync(readPath)
    res.writeHead(200, {'Content-Type': 'image/png'})
    res.end(indexPage)
}
function resDefault(res) {
    res.writeHead(404, {'Content_Type': 'text/plain'})
    res.end('can not find soure')
}