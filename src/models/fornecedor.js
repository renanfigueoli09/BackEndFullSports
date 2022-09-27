import mongoose from "mongoose";
const fornecedorSchema = new mongoose.Schema(
    {
        id:{type:String},
        cnpj:{type:String},
        endereco:{type:String}
    }
)
const fornecedor = mongoose.model("fornecedor",fornecedorSchema)
export default fornecedor