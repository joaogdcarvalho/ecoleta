import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

/*
const users = 
                [
                    'Felipe Matos',
                    'Adriana Gomes',
                    'Paula Andrade',
                    'Bruno Botelho'
                ]

app.get('/users', (request, response) => {
    const search = String(request.query.search);
    const filtered = search ? users.filter(user => user.includes(search)) : users;
    console.log(filtered);
    response.json(filtered);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];
    console.log(user);
    response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name
    };

    console.log(user);
    response.json(user);
});*/


app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.listen(3333);