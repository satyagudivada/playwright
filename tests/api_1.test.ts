import {test, expect} from '@playwright/test';
 
var userId: string;
 
test("Get user details using GET API",async({request})=>{
    const response = await request.get('http://api.restful-api.dev/objects');
    var responseJson = await response.json();
    console.log(responseJson);
    expect(response.status()).toBe(200);
   
    expect(responseJson[0].data.color).toBe('Cloudy White');
})
 
test("Create user using POST API",async({request})=>{
    var user = {
        "name": "Apple MacBook Pro 16",
        "data": {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    }
 
    const response = await request.post('http://api.restful-api.dev/objects',{
        data: user,
        headers:{"ACCEPT":"application/json"}
    })
 
    expect(response.status()).toBe(200);
   
    var responseJson = await response.json();
   
    expect(responseJson.name).toBe(`${user.name}`);
    userId = responseJson.id;
})
 
test("Create user using PUT API",async({request})=>{
    var user = {
        "name": "Apple MacBook Pro 16",
        "data": {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    }
 
    const response = await request.put('http://api.restful-api.dev/objects/'+userId,{
        data: user,
        headers:{"ACCEPT":"application/json"}
    })
 
    expect(response.status()).toBe(200);
   
    var responseJson = await response.json();
   
    expect(responseJson.name).toBe(`${user.name}`);
    userId = responseJson.id;
})
 
test("Delete user using DELETE API",async({request})=>{
    const response = await request.delete('http://api.restful-api.dev/objects/'+userId);
 
    expect(response.status()).toBe(200);
   
    var responseJson = await response.json();
    userId = responseJson.id;
 
    const responseToCheck = await request.get('http://api.restful-api.dev/objects/'+userId);
    console.log(await responseToCheck.json());
})