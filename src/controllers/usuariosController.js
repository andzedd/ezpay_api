import usuarios from "../models/Usuario.js";

class UsuarioController{
    static listarUsuarios = async (req,res) => {
        try{
            const resultado = await usuarios.find();
            res.status(200).json(resultado)
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static listarUsuarioPorId = async (req,res) => {
        const id = req.params.id
        try {
            const resultado = await usuarios.findById(id)
            res.status(200).json(resultado)
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }

    static cadastrarUsuario = async (req,res) => {
        let usuario = new usuarios(req.body);
        try{
            await usuario.save();
            res.status(201).send(`Usuário ${usuario.nome} cadastrado com sucesso`);
        } catch (err){
            res.status(500).send({message: `${err.message} - erro ao cadastrar novo usuário`});
        }
    }

    static atualizarUsuario = async (req,res) => {
        const id = req.params.id;
        try {
            await usuarios.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({message: 'Usuário atualizado com sucesso'})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }

    static excluirUsuario = async (req,res) => {
        const id = req.params.id
        try {
            const resultado = await usuarios.findByIdAndDelete(id)
            res.status(200).send({message: `Usuário ${resultado.nome} excluído com sucesso!`})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
}

export default UsuarioController;