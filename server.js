const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();


// const http = require('http');

// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     response.statusCode = 200;

//     const { method, url } = request;

//     if(url === '/') {
//         if(method === 'GET'){
//             response.end('<h1>Ini adalah Homepage </h1>');
//         } else {
//             response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
//         }
//     } else if(url === '/about'){
//         if(method === 'GET'){
//             response.end('<h1> Halo ini adalah halaman about</h1>');
//         } else if(method === 'POST'){
//             let body = [];

//             request.on('data', (chunk) => {
//                 body.push(chunk);
//             });

//             request.on('end', () => {
//                 body = Buffer.concat(body).toString();
//                 const {name} = JSON.parse(body);
//                 response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
//             });
//         } else {
//             response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
//         } 
//     } else {
//         response.end('<h1>Halaman tidak ditemukan!</h1>');
//     }
// };

/*  if (method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }

    if (method === 'POST') {
        let body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
            response.end(`<h1>Hai, ${name}!</h1>`);
        });
    }

    if (method === 'PUT') {
        response.end('<h1>Bonjour!</h1>');
    }

    if (method === 'DELETE') {
        response.end('<h1>Salam!</h1>');
    }
}; */

// const server = http.createServer(requestListener);

// const port = 5000;
// const host = 'localhost';

// server.listen(port, host, () => {
//     console.log(`Server berjalan pada http://${host}:${port}`);
// });