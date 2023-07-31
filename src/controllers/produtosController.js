import produtos from "../models/Produto.js";

class ProdutoController{
    static listarProdutos = async (req,res) => {
        try{
            const resultado = await produtos.find();
            res.status(200).json(resultado)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

export default ProdutoController;