import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
    {
        id: {type: String}
    },{strict: false}
);

const produtos = mongoose.model('carrinho', produtoSchema);

export default produtos;