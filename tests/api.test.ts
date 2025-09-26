import {test,expect} from '@playwright/test'
import { request } from 'node:http'
var userId

//GET

// test('GET API',async({request})=>{
//     const response=await request.get('http://api.restful-api.dev/objects');
//     const response_json=await response.json()
//     console.log(response_json);
//     expect(response.status()).toBe(200);
//     //expect(response_json[0].data.color).toBe('Cloudy White');
// })
//post
test('get post',async({request})=>{
    const response=await request.post('http://api.restful-api.dev/objects',
        {
            data:{
                name:'satya',
                empid:'09876'
            },
            headers:{
                "Accept":"application/json"}
        })
    const response_json=await response.json();
    console.log(response_json);
    expect(response.status()).toBe(200)    
    userId= response_json.id
    console.log(userId)
})
//put 
test('put user', async({request})=>{
    const response=await request.put('http://api.restful-api.dev/objects'+userId,
        {
            data:{
                name:"siri",
                empid:'09876'
            },
            headers:{
                "Accepts":"Application/json"
            }
        })
    const response_json=await response.json();
    console.log('resonse is',response_json) 
    expect(response.status()).toBe(200)


})

test('delete user', async({request})=>{
    const response=await request.delete('http://api.restful-api.dev/objects'+userId,
        {
            data:{
                name:"siri",
                empid:'09876'
            },
            headers:{
                "Accepts":"Application/json"
            }
        })
    const response_json=await response.json();
    console.log('resonse is',response_json) 
    expect(response.status()).toBe(200)


})
