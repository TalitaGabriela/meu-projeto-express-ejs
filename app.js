const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, titulo: "", valor:"", descricao:"", imagem:""},
  {id: 2, titulo: "", valor:"", descricao:"", imagem:""},
  {id: 3, titulo: "", valor:"", descricao:"", imagem:""},
  {id: 4, titulo: "", valor:"", descricao:"", imagem:""},
  {id: 5, titulo: "", valor:"", descricao:"", imagem:""},
  {id: 6, titulo: "", valor:"", descricao:"", imagem:""},
  {id: 7, titulo: "", valor:"", descricao:"", imagem:""},
  {id: 8, titulo: "", valor:"", descricao:"", imagem:""},
  {id: 9, titulo: "", valor:"", descricao:"", imagem:""},
  {id: 10, titulo: "", valor:"", descricao:"", imagem:""}
]

app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Olá, Mundo!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});