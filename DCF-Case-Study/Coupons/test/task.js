//Load chai, chai-http and the file you want to test
const chai = require('chai');
const server = require("../coupons");
let chaiHttp = require('chai-http');

//Assertion style
chai.should();

//Call API using HTTP Protocol
chai.use(chaiHttp);

describe('Testing API', ()=>{
    //Test the GET method
    describe("GET /coupons", ()=>{
        it("It should GET all the coupons", (done)=>{
            chai.request(server)
            .get("/coupons")
            .end((err, response)=>{
                response.should.have.status(200);
            done();
            })
        }).timeout(10000);
        it("It should NOT GET all the coupons", (done)=>{
            chai.request(server)
            .get("/coupon")
            .end((err, response)=>{
                response.should.have.status(404);
            done();
            })
        }).timeout(10000);
        it("It should GET by ID", (done)=>{
            const ID = "614eb53415c0833d7833d370"
            chai.request(server)
            .get("/coupon/"+ID)
            .end((err, response)=>{
                response.should.have.status(200);
                response.should.be.a('object');
            done();
            })
        }).timeout(10000);
        it("It should NOT GET by ID", (done)=>{
            const ID = "123"
            chai.request(server)
            .get("/coupon"+ID)
            .end((err,response)=>{
                response.should.have.status(404);
            done();
            })
        }).timeout(10000);
    })
})