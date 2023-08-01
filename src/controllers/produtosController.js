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

    static listarProdutoPorId = async (req,res) => {
        const id = req.params.id
        try {
            const resultado = await produtos.findById(id)
            res.status(200).json(resultado)
        } catch (error) {
            res.status(500).send({message: error.message})
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

    static atualizarProduto = async (req,res) => {
        const id = req.params.id;
        try {
            await produtos.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({message: 'Produto atualizado com sucesso'})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
}

export default ProdutoController;