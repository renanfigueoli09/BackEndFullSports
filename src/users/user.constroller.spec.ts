import { Logger } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { Model } from "mongoose";
import { Users, UsersDocument } from "./Schema/user.schema";
import { UserService } from "./user.service";
import { UserController } from "./users.controller"
describe("UserController", () => {
    let userController: UserController;
    let useService: UserService;
    let userModel: Model<UsersDocument>
    beforeEach(() => {
        useService = new UserService(userModel);
        userController = new UserController(useService)
    });


    it("•Execulta ListUsers()", async () => {
        const listUser = userController.ListUsers()
        console.log(listUser)
    })
    it("•Execultar CreateUser()", async () => {
        let newUser = {
            cpf: "643.968.790-59",
            nome: "TDD user.controller",
            dataNascimento: "20/20/2000",
            sexo: "M",
            cep: "20321-000",
            endereco: "Rua João do Test",
            dataCadastro: new Date()
        }
        expect(userController.CreateUser(newUser))
    })
})