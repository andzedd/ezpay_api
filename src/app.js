import express from "express"

const app = express();

app.use(express.json())

const produtos = [
    {id: 1, "titulo": "Macarrão"},
    {id: 2, "titulo": "Arroz"},
    {id: 3, "titulo": "Açúcar"}
]

app.get('/', (req,res) => {
    res.status(200).send('EZPAY API');
})

app.get('/produtos', (req,res) => {
    res.status(200).json(produtos);
})

app.get('/produtos/:id', (req,res) => {
    let index = buscaProduto(req.params.id);
    res.json(produtos[index]);
})

app.post('/produtos', (req,res) => {
    produtos.push(req.body);
    res.status(201).send('Produto cadastrado com sucesso!');
})

app.put('/produtos/:id', (req,res) => {
    let index = buscaProduto(req.params.id);
    produtos[index].titulo = req.body.titulo;
    res.json(produtos);
})

app.delete('/produtos/:id', (req,res) => {
    let {id} = req.params;
    let index = buscaProduto(id);
    produtos.splice(index, 1);
    res.send(`Produto ${id} removido com sucesso!`);
})

function buscaProduto(id){
    return produtos.findIndex(produto => produto.id == id);
}

export default app