import express from "express";
import ProdutoController from "../controllers/produtosController.js"

const router = express.Router();

router
    .get("/produtos", ProdutoController.listarProdutos)
    .get("/produtos/:id", ProdutoController.listarProdutoPorId)
    .post("/produtos", ProdutoController.cadastrarProduto)
    .put("/produtos/:id", ProdutoController.atualizarProduto)

export default router;