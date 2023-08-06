import carrinhos from "../models/Carrinho.js";

class CarrinhoController{
    static listarCarrinho = async (req,res) => {
        try{
            const resultado = await carrinhos.find();
            res.status(200).json(resultado)
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static adicionarAoCarrinho = async (req,res) => {
        let carrinho = new carrinhos(req.body);
        try{
            await carrinho.save();
            res.status(201).send(`Produto ${carrinho.nome} adicionado ao carrinho`);
        } catch (err){
            res.status(500).send({message: `${err.message} - erro ao adicionar ao carrinho`});
        }
    }

    static excluirProduto = async (req,res) => {
        const id = req.params.id
        try {
            const resultado = await carrinhos.findByIdAndDelete(id)
            res.status(200).send({message: `Produto ${resultado.nome} removido do carrinho`})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
}

export default CarrinhoController;