const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const describe = require('mocha').describe;
const chaiHttp = require('chai-http');
const before = require('mocha').before;
const it = require('mocha').it;
const app = require('../../server')
chai.use(chaiHttp);

describe('Users', () => {
    let loginUser = ''

    const user = {

        "email": "tota@gmail.com",
        "password": "user123"

    }

    before(async () => {

        loginUser = await chai.request(app)
            .post('/api/users/login')
            .send({ email: user.email, password: user.password })
    })



     
//Test the /login route
    describe('/login user', () => {
        it('it should login a user', async () => {
            expect(loginUser.status).to.equal(200)
            

        })

        it('it should NOT login a user with a wrong password', async () => {
            const toto= await chai.request(app)
                .post('/api/users/login')
                .send({ email: 'xxxxxx', password: 'xxxxxx' })

            expect(toto.status).to.equal(401)
            
        })

        it('it should NOT login a user with a wrong field', async () => {
            const toto= await chai.request(app)
                .post('/api/users/login')
                .send({ username: 'xxxxxx', password: 'xxxxxx' })

            expect(toto.status).to.equal(400)
            
        })
    })


//Test the /create route

    describe('/create user', () => {


        xit('it should NOT create a user with wrong email', async () => {
            const toto = await chai.request(app)
            .post('/api/users/signup')
            .send({

                "lastName": "natre",
                "firstName": "tabc",
                "emails": "tataingmail.com",
                "password": "user123"

              })

        expect(toto.status).to.equal(400)
        })

        xit('it should NOT create a user with wrong fields', async () => {
            const toto = await chai.request(app)
            .post('/api/users/signup')
            .send({

                "lastame": "paul",
                "firstame": "Raoul",
                "email": "paulgmail.com",
                "password": "user123"

              })

        expect(toto.status).to.equal(400)
        })
    })
})
