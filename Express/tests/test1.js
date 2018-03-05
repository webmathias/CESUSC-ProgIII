const http = require('http');
var option = {
    host: 'localhost',
    port: 3000,
    path: '/user',
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Cache-Control': 'node-cache'
        // 'Content-Length': Buffer.byteLength(postData)
    }
};
option.method = 'GET';
var req = http.request(option, (res)=>{
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);
        } catch (e) {
            console.error(e.message);
        }
    });
});
req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});
req.end();