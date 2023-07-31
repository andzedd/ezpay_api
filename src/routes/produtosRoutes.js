import express from "express";
import ProdutoController from "../controllers/produtosController.js"

const router = express.Router();

router
    .get("/produtos", ProdutoController.listarProdutos)
    .post("/produtos", ProdutoController.cadastrarProduto)

export default router;