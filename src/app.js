import express from "express"

const app = express();

app.use(express.json())

const produtos = [
    {id: 1, "titulo": "Macarrão"},
    {id: 2, "titulo": "Arroz"},
    {id: 3, "titulo": "Açúcar"}
]

app.get('/', (req,res) => {
    res.status(200).send('EZPAY API')
})

app.get('/produtos', (req,res) => {
    res.status(200).json(produtos)
})

app.post('/produtos', (req,res) => {
    produtos.push(req.body)
    res.status(201).send('Produto cadastrado com sucesso!')
})

export default app