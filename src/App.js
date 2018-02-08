import React, { Component } from 'react';
import logo from './logo.svg';

const persons = [
    {
        name: 'Arto Hellas',
        number: '040-123456',
        id: 1,
    },
    
    {
        name: 'Martti Tienari',
        number: '040-123456',
        id: 2,
    },
    {
        name: 'Arto Järvinen',
        number: '040-123456',
        id: 3,
    },
    {
        name: 'Lea Kutvonen',
        number: '040-123456',
        id: 4,
    },
];

const http = require('http');

const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(persons));
});

const port = 3001;
app.listen(port);
console.log(`Server running on port ${port}`);


