const https = require('https');
const {JSDOM} = require('jsdom')
https.get({
    hostname: 'www.imdb.com',
    port: 443,
    path: '/search/keyword?keywords=java',
    agent: false  // create a new agent just for this one request
}, (res) => {
    const statusCode = res.statusCode;
    if (statusCode === 200) {
        let rawData = '';
        res.on('data', (chunk) => {
            rawData += chunk
            console.log('.');
        });
        res.on('end', () => {
            const dom = new JSDOM(rawData);
            const filmes = dom.window.document.querySelector('.lister-list');
            for (let filme of filmes.children) {
                const titulo = filme.querySelector('h3')
                .querySelector('a').textContent
                console.log(titulo)
            }
        })
    }
});