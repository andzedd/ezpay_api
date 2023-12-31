import express from "express";
import produtos from "./produtosRoutes.js"
import usuarios from "./usuariosRoutes.js"
import carrinho from "./carrinhoRoutes.js"

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({nome: "Teste"})
    })

    app.use(
        express.json(),
        produtos,
        usuarios,
        carrinho
    )
}

export default routes