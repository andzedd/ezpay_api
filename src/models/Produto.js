import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        validade: {type: Date, required: true},
        marca: {type: String, required: true},
        preco: {type: Number, required: true}
    }
);

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;