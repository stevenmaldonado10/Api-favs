require("../Config/config")

const request = require("supertest");

const app = require("../index")

const user = require("../Models/user")
const user = require("../Models/fav");
const fav = require("../Models/fav");


describe("create user and get list favs", ()=> {

        it("create user and favs MongoDB", async () =>{

            const response = await request(app).post("/auth/local/register").send({
                email:"stevenmaldonado10@hotmail.com",
                password: "pass2"    

            });

            expect(response.body).not.toBeNull()

        });

        it("return favs in MongoDB", async () =>{

            const response = await fav.find();

            expect(response.body).not.toBeNull()

        });



})