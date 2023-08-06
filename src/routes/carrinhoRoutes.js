import express from "express";
import CarrinhoController from "../controllers/carrinhoController.js"

const router = express.Router();

router
    .get("/carrinho", CarrinhoController.listarCarrinho)
    .post("/carrinho", CarrinhoController.adicionarAoCarrinho)
    .delete("/carrinho/:id", CarrinhoController.excluirProduto)

export default router;