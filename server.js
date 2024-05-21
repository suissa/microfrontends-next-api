const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Permitir CORS para todas as origens
app.use(cors());

// Lista de cursos
const courses = [
  { id: 1, name: 'Curso 1 API' },
  { id: 2, name: 'Curso 2' },
  { id: 3, name: 'Curso 3' },
  { id: 4, name: 'Curso 4' },
];

// Rota GET /courses
app.get('/courses', (req, res) => {
  res.json(courses);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
