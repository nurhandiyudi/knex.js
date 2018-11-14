const request = require("supertest")
const expect = require("chai").expect
const knex = require("../db/knex")

const fixtures = require("../db/fixtures")

const app = require("../app")

describe('CRUD Stickers', () => {
  
    before((done) => {
        knex.migrate.latest()
            .then(() => {
           return knex.seed.run()
            }).then(() => done())
        
    })
    
    it('List all Records', (done) => {
        request(app)
          .get('/api/v1/sticker/test')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then((response) => {
            expect(response.body).to.be.a('array');
            console.log(response.body)
            done();
          })
    })
    it('show one Records', (done) => {
        request(app)
          .get('/api/v1/sticker/1')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then((response) => {
            expect(response.body).to.be.a('array');
            console.log(response.body)
            done();
          })
    })
    it('creates a Records', (done) => {
        request(app)
          .post('/api/v1/sticker/add')
          .send(fixtures.sticker)
          .set("Accept", "aplication/json")
          .expect('Content-Type', /json/)
          .expect(200)
          .then((response) => {
            expect(response.body).to.be.a('object');
            fixtures.sticker.id= response.body.id
            expect(response.body).to.deep.equal(fixtures.sticker)
            //console.log(response.body)
            done();
          })
    })
    it('edit one Records', (done) => {
        request(app)
          .put('/api/v1/sticker/edit/103')
          .send(fixtures)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then((response) => {
            expect(response.body).to.be.a('object');
            expect(response.body).to.be.equal(fixtures)
            console.log(fixtures)
            done();
          })
    })
})

