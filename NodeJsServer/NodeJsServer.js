//引入http模块
var http = require('http');
//设置主机名
var hostName = '127.0.0.1';
//设置端口
var port = 9090;
//创建服务
var server = http.createServer(function(req,res){
    res.setHeader('Content-Type','text/plain');
    res.end('hello nodejs');

});
server.listen(port,hostName,function(){
    console.log('服务器运行在%s:%d', hostName, port);
});