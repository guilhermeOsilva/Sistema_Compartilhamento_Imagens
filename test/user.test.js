let supertest = require("supertest");
let app = require("../src/app");
let request = supertest(app);

describe("Cadastro de ususario", () => {
  test("Deve cadastrar um usuario com sucesso", () => {
    let time = Date.now();
    let email = `${time}@gmail.com`;

    let user = { name: "Guilherme", email, password: "test123" };

   return request.post("/user")
      .send(user)
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.email).toEqual(email);

      }).catch((err) => {
        console.log(err);
      });
  });
});
