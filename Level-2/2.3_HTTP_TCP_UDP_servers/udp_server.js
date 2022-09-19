const udp = require('dgram');
const port = 8002;
const host = '127.0.0.1';

const server = udp.createSocket('udp4');

server.on('message', (data, info) => {
    console.log(`Client connected from: ${info.address}:${info.port}`)
    console.log(`Client send: "${data}"`);

    server.send(data, info.port);
});

server.bind(port, host, () =>
    console.log(`Server started on ${host}:${port}`));
