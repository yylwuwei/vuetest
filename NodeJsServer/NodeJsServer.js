//引入http模块
var http = require('http');
var url = require('url');
var querystring = require('querystring');

//设置主机名
var hostName = '127.0.0.1';
//设置端口
var port = 9090;
//创建服务
var server = http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    var paramStr = url.parse(req.url).query;
    var param = querystring.parse(paramStr);
    console.log(pathname);
    console.log(param);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader('Content-Type','text/plain');
    //res.writeHeader(205);
    res.end('"login_err"');

});

server.listen(port,hostName,function(){
    console.log('服务器运行在%s:%d', hostName, port);
});