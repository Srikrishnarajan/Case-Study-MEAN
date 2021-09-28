//Load dependencies and the file you want to test
let expect = require('chai').expect;
let server = require('../users');
let chaiHttp = require('chai-http');
let chai=require('chai');

//Assertion Style
chai.should();

//Call API using HTTP Protocol
chai.use(chaiHttp);

//Testing POST route for register
describe('Testing API',async()=>{
    describe('POST /register',()=>{
      it('Should return 200',(done)=>
      {
        const task=
        {
            email: "vijay@gmail.com",
            password: "Test@123",
            completed: false
        }
        chai.request(server)
        .post('/register')
        .send(task)
        .end((err,res)=>
        {
          expect(res).to.have.status(200);
          done();
        });
      }).timeout(10000);
    });
});

describe('Testing API',async()=>{
    describe('POST /register',()=>{
      it('Should return 404',(done)=>
      {
        const task=
        {
            email:"suryasivakumar@gmail.com",
            completed:false
        }
        chai.request(server)
        .post('/register')
        .send(task)
        .end((err,res)=>
        {
          expect(res).to.have.status(404);
          done();
        });
      }).timeout(10000);
    });
});

//Testing POST route for login
describe('Testing API',async()=>{
    describe('POST /login',()=>{
      it('Should return 200',(done)=>
      {
        const task=
        {
            email:"suryasivakumar@gmail.com",
            password:"Test@123",
            completed:false
        }
        chai.request(server)
        .post('/login')
        .send(task)
        .end((err,res)=>
        {
          expect(res).to.have.status(200);
          done();
        });
      }).timeout(10000);
    });
});

describe('Testing API',async()=>{
    describe('POST /login',()=>{
      it('Should return 401',(done)=>
      {
        const task=
        {
            email:"abc@gmail.com",
            password:"Test@123",
            completed:false
        }
        chai.request(server)
        .post('/login')
        .send(task)
        .end((err,res)=>
        {
          expect(res).to.have.status(401);
          done();
        });
      }).timeout(10000);
    });
});