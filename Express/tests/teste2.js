const request = require('request');

request.put('http://localhost:3000/user',
    {form:{name: 'Mathias'}},
    (err, res, body) => {
        console.log(body);
    });
request.get('http://localhost:3000/user',
    (err, res, body) => {
    console.log(body);
});
