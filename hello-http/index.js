
const http = require('http');

const server = http.createServer(() => {
    console.log('Oh wow, I got a request.');
});

server.listen(3000, () => {
    console.log('Server is listening!');
});

