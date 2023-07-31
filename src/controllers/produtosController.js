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

    static cadastrarProduto = async (req,res) => {
        let produto = new produtos(req.body);
        try{
            await produto.save();
            res.status(201).send(produto.toJSON());
        } catch (err){
            res.status(500).send({message: `${err.message} - erro ao cadastrar novo produto`});
        }
    }
}

export default ProdutoController;