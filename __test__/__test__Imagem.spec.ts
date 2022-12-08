import app from "../src/app/app";
import request from 'supertest'
import logger from "../src/logger";
// import fs from 'fs'
// var img = fs.createReadStream("./tmp/testes-unitarios.png");
describe("Teste do Backend do Fullsports - Deve Realizar todas as Rotas de Imagem", () => {
    const imagem = request(app);
    it("• Deve Execultar o método GET de todas as Imagens",async()=>{
        const ConsultarImagens = await imagem.get("/imagem")
        
        console.log(ConsultarImagens.body)
    })
    it("• Deve Execultar o método POST de imagens", async () => {
        const CadastrarImagem = await imagem.post("/imagem")
        .send({
            // file: img
        }) 

        console.log("ee"+ CadastrarImagem.body)

    })
});