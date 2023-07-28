import express from "express"

const app = express();

const produtos = [
    {id: 1, "titulo": "Macarrão"},
    {id: 2, "titulo": "Arroz"},
    {id: 3, "titulo": "Açúcar"}
]

app.get('/', (req,res) => {
    res.status(200).send('EZPAY API')
})

app.get('/busca', (req,res) => {
    res.status(200).json(produtos)
})

export default app