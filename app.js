const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
    {id: 1, titulo: "Chaveiro Astrológico", valor:"$ 15,00", descricao:"Chaveiro Astrológico de signos, adiquira já o seu!!!", imagem:"/imagens/chaveiro.webp"},
    {id: 2, titulo: "Mapa Astrológico Simples", valor:"$ 100,00", descricao:"Mapa Astrológico Simples de signos, adiquira já o seu!!!", imagem:"/imagens/mapa-simples.jpg"},
    {id: 3, titulo: "Quadro de Signo", valor:"$ 20,00", descricao:"Quadro de de Signos, adiquira já o seu!!!", imagem:"/imagens/quadro-signo.webp"},
    {id: 4, titulo: "Agenda Astrológica", valor:"$ 30,00", descricao:"Agenda Astrológica, adiquira já a sua!!!", imagem:"/imagens/agenda-signo.webp"},
    {id: 5, titulo: "Kit de 3 dados Astrológicos", valor:"$ 10,00", descricao:"Kit de 3 dados Astrológicos, adiquira já o seu!!!", imagem:"/imagens/dados-signo.webp"},
    {id: 6, titulo: "Camiseta Astrológica", valor:"$ 18,00", descricao:"Camiseta Astrológica de signos, adiquira já a sua!!!", imagem:"/imagens/camiseta-signo.avif"},
    {id: 7, titulo: "Mapa Astrológico Elaborado", valor:"$ 120,00", descricao:"Mapa Astrológico Elaborado de signos, adiquira já o seu!!!", imagem:"/imagens/mapa-elaborado.jpeg"},
    {id: 8, titulo: "Guia para o Mundo da Astrologia", valor:"$ 80,00", descricao:"Guia para o Mundo da Astrologia, adiquira já o seu!!!", imagem:"/imagens/guia-signo.webp"},
    {id: 9, titulo: "Cartas de Tarot - Astrologia", valor:"$ 95,00", descricao:"Cartas de Tarot - Astrologia, adiquira já as suas!!!", imagem:"/imagens/cartas-tarot.webp"},
    {id: 10, titulo: "Colar Astrológico", valor:"$ 50,00", descricao:"Colar Astrológico de signos, adiquira já o seu!!!", imagem:"/imagens/colar-signo.webp"}
  ];

  function buscarProduto(id){
    const produto = produtos.find(produto => produto.id == id)
    return produto || null
  }
  
  for (let produto of produtos){
    console.log(produto.titulo)
  }

app.get('/', (req, res) => {
  res.render('index', { produtos });
});

app.get('/produtos/:id', (req, res) => {
  //const produto = buscarProduto(req.params.id)//
  const produto = buscarProduto(req.params.id)
res.render('produtos', {  produto });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});