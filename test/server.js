const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");
chai.use(chaiHttp);

const expect = chai.expect;

//Testing login
function testLogin() {
  chai
    .request(server.authServer)
    .post("/login")
    .type("form")
    .send({
      username: "admin",
      password: "admin123",
    })
    .then(function (res) {
      expect(res).to.have.status(200);
      testAuth(res.body.accessToken);
    })
    .catch(function (err) {
      throw err;
    });
}

//Testing Autorisation

function testAuth(token){
    chai
    .request(server.authorisationServer)
    .get("/me")
    .set('Authorization', `Bearer ${token}`)
    .send()
    .then(function (res) {
      expect(res).to.have.status(200); 
      console.log('Test success');
      process.exit();
    })
    .catch(function (err) {
      console.log("Test Failed");
      throw err;
    })

}

testLogin();