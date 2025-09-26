 
import { test} from '@playwright/test';
 
test.describe('test suite', () =>{
    test.beforeAll(async () => {
        console.log('database connectivity code')
    });
    test.afterAll(async () => {
        console.log('close connection code')
    });
 
test.beforeEach(async () => {
    console.log('navigate to homegame')
});
 
test.afterEach(async () => {
    console.log('close page')
});
 
test('test1', async () => {
    console.log('Test 1')
});
test('test2', async () => {
    console.log('Test 2')
});
 
})
 
 
test('test3', async () => {
    console.log('Test 3')
});
 