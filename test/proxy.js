var proxy = require(__dirname + './../lib/index');

//静态文件目录
proxy.static(__dirname + '/output');
proxy.static(__dirname + '/output', {path: '/test/', index: ['index.html', 'index.txt']});
proxy.static(__dirname + '/output', {path: 'test2'});
//
//proxy.smarty({ext: '.html', data: {data: 'smarty html'}});
//
// proxy.when('index.html', function (ctx) {
//     console.log('you get index.html');
// });
// proxy.when({url: 'index.html', phase: 'response'}, function (ctx) {
//     console.log('you has get index.html');
// });

// proxy.on('start', function (ctx) {
//     console.log('start: ', ctx.request.url, ctx.isLocal(), ctx.isBinary(ctx.request.url));
// });
// proxy.on('end', function (ctx) {
//     console.log('end: ', ctx.request.url);
// });

proxy.listen(6667);

module.exports = proxy;