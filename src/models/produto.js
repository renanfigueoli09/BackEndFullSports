const mongoose = require("mongoose");
const produtoSchema = new mongoose.Schema(
    {
        id: {
            type: String
        },
        categoriaProduto: {
            roupa: { type: mongoose.Schema.Types.ObjectId, ref: 'roupas' },
            equipamento: { type: mongoose.Schema.Types.ObjectId, ref: 'equipamentos' },
            suplemento: { type: mongoose.Schema.Types.ObjectId, ref: 'suplementos' }
        },
        dataCadastro:{
            type: String,
            required:true
        },
    });
produto = mongoose.model("produtos", produtoSchema);
module.exports = produto;