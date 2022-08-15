const request = require('supertest')
const app = require('../app')

describe('API Users', ()=>{

    let response

    beforeAll( async ()=>{
        response = await request(app).get('/api/users')
    })

    it('should return status code 200 and ok true', async ()=>{

        expect(response.statusCode).toBe(200)
        expect(response.ok).toBe(true)
    })

    it('should return nextPage valid number', async ()=>{
    
        expect(response.body.nextPage).toBeDefined()
        expect(response.body.nextPage).toBeGreaterThan(0)
    })

    it('should return an array', async ()=>{
      
        const data = response.body.users
        expect(data).toBeInstanceOf(Array)
    })

    
})



describe('API Users Details', ()=>{

    let response

    beforeAll( async ()=>{
        response = await request(app).get('/api/users/rabble/details')
    })

    it('should return status code 200 and ok true', async ()=>{

        expect(response.statusCode).toBe(200)
        expect(response.ok).toBe(true)
    })

    it('should have a userDetails property and userid', async ()=>{
        const id = response.body.userDetails.id
        const body = response.body;

        expect(id).toEqual(76)
        expect(body).toHaveProperty('userDetails')
    })

    it('should return an object', async ()=>{
      
        const data = response.body
        expect(data.userDetails).toBeInstanceOf(Object)
    })
    
    it('should give error 404 when user not exist', async ()=>{

        res = await request(app).get('/api/users/daumelsss/details')
        expect(res.statusCode).toBe(404)

    })
})


describe('API Users Repos', ()=>{

    let response

    beforeAll( async ()=>{
        response = await request(app).get('/api/users/rabble/repos')
    })

    it('should return status code 200 and ok true', async ()=>{

        expect(response.statusCode).toBe(200)
        expect(response.ok).toBe(true)
    })

    it('should have a userDetails property', async ()=>{
        const id = response.body.userDetails.id
        const body = response.body;

        expect(body).toHaveProperty('userDetails')
    })

    it('should return an object', async ()=>{
      
        const data = response.body
        expect(data.userDetails).toBeInstanceOf(Array)
    })
    
    it('should give error 404 when user not exist', async ()=>{

        res = await request(app).get('/api/users/daumelsss/repos')
        expect(res.statusCode).toBe(404)

    })
})