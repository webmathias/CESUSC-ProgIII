const http = require('http')
const server = '127.0.0.1';
const server_port = 8080;
describe('Trabalho N1', ()=>{
    it("GET, invalid", (done)=>{
        var options = {
            hostname: server
            ,port: server_port
            ,path: '/api/client/'
            ,method: 'GET'
            ,headers: { 'Content-Type': 'application/json' }
          };          
          var req = http.request(options, function(res) {
            res.setEncoding('utf8');
            res.on('data', function (data) {
                 console.log('AQUI', data); // I can't parse it because, it's a string. why?
            });
          });
          req.on('error', function(e) {
            done(Error("ERROR: Servidor Desligado ou ponto de entrada invalid"))
          });
          req.end();
    })
})