const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let tasks = [
	{
		id: nanoid(),
		title: 'Estudar módulo 01 de NodeJS',
		status: 'done',
		user: 'bruno'
	},
	{
		id: nanoid(),
		title: 'Estudar módulo 02 de NodeJS',
		status: 'done',
		user: 'gabryel'
	},
	{
		id: nanoid(),
		title: 'Estudar módulo 03 de NodeJS',
		status: 'done',
		user: 'gabryel'
	},
	{
		id: nanoid(),
		title: 'Estudar módulo 01 de ReactJS',
		status: 'doing',
		user: 'gabryel'
	},
	{
		id: nanoid(),
		title: 'Estudar módulo 02 de ReactJS',
		status: 'doing',
		user: 'gabryel'
	},
	{
		id: nanoid(),
		title: 'Estudar módulo 03 de ReactJS',
		status: 'doing',
		user: 'gabryel'
	},
	{
		id: nanoid(),
		title: 'Estudar módulo 01 de Cloud',
		status: 'todo',
		user: 'gabryel'
	},
	{
		id: nanoid(),
		title: 'Estudar módulo 02 de Cloud',
		status: 'todo',
		user: 'gabryel'
	},
	{
		id: nanoid(),
		title: 'Estudar módulo 03 de Cloud',
		status: 'todo',
		user: 'gabryel'
	},
];

app.get('/test', (req, res) => res.send('ok!'));

app.get('/tasks/:user', (req, res) => {
	const user = req.params.user;
	const filteredTasks = tasks.filter((task) => task.user == user);
	res.send(filteredTasks)
});

app.post('/tasks', (req, res) => {
	const { status, title, user } = req.body;
	const task = {
		id: nanoid(),
		status,
		title,
		user
	};
	tasks.push(task);
	return res.send(task);
});

app.put('/tasks/:id', (req, res) => {
	const id = req.params.id;
	const index = tasks.findIndex((task) => task.id == id);
	const { status, title } = req.body;
	const task = {
		status,
		title
	};
	if (index > -1) {
		tasks[ index ] = { ...tasks[ index ], ...task };
	}
	return res.send(tasks[ index ]);
});

app.delete('/tasks/:id', (req, res) => {
	const id = req.params.id;
	const index = tasks.findIndex((task) => task.id == id);
	if (index > -1) {
		tasks.splice(index, 1);
	}

	res.send(tasks);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${ PORT }`.green.bold));
