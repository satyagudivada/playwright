import {chromium, test, expect} from '@playwright/test'
test('practice',async()=>{
    const browser= await chromium.launch({headless:false});
    const context= await browser.newContext();
    const page= await context.newPage();
    // await page.goto('https://practice.expandtesting.com/shadowdom')
    await page.goto('https://testautomationpractice.blogspot.com/');
    /*await page.fill('#name','Satya');
    await page.fill('//input[@id="email"]','gsn@gmail.com');
    await page.fill('//input[@placeholder="Enter Phone"]','7077777777');
    await page.fill('//textarea[@id="textarea"]','Chennai');
    //radio button
    //await page.locator('#female').click()
    await page.locator('#female').check();
    await expect(page.locator('#female')).toBeChecked();
    //Multiple check Box
    const checkbox=['//input[@id="sunday"]','//input[@id="monday"]','//input[@id="friday"]','//input[@id="saturday"]']
    for (let locator of checkbox){
        await page.locator(locator).check()
    }
    //dropdown
    await page.locator('#country').selectOption('India')
    await page.selectOption('//select[@id="colors"]','Green');
    await page.selectOption('#animals','Cat');
    //date picker
    await page.locator('//input[@id="datepicker"]').fill('09/23/2025');

    await page.click('#txtDate');
    await page.selectOption('.ui-datepicker-month','Jan');
    await page.selectOption('.ui-datepicker-year','2025');
    await page.locator('//a[text()="6"]').click();
   //upload files
   await page.click('#singleFileInput')
   await page.locator('#singleFileInput').setInputFiles('tests/sample.test.ts');
   // table

   const table=await page.locator('#productTable');
    const columns=table.locator('thead tr th');
    //const total_column=await columns.count()
    console.log('total no of colum',await columns.count());
    ////total number of rows
    const rows= table.locator('tbody tr')
    const total_rows=await rows.count()
    console.log('total no of rows',total_rows)
    //select checkbox
    const matchedRow=rows.filter({
        has:page.locator('td'),
        hasText:'Smartwatch'

    })
    matchedRow.locator('input').check
    await page.waitForTimeout(2000)*/
    //alert 
    // page.on('dialog',async dialog =>{
    //     const alertMsg=await dialog.message()
    //     console.log('alert msg is:',alertMsg)
    //     await expect(alertMsg).toBe('I am an alert box!')
    //     await page.waitForTimeout(2000)
    //     dialog.accept();
        
    // })
    // await page.locator('#alertBtn').click()
    //confirm 
    // page.on('dialog',async dialog =>{
    //     const confirm=await dialog.message()
    //     console.log('confirm msg:',confirm);
    //     await expect(confirm).toContain('Press a button!')
    //     await dialog.accept();
    // })
    // await page.click('#confirmBtn')
//prompt
    // page.on('dialog',async dialog1 =>{
    //     const prompt=await dialog1.message()
    //     console.log('prompt msg:',prompt)
    //     await expect(prompt).toBe('Please enter your name:')
    //     await dialog1.accept('Satya')
    // })
    // await page.click('#promptBtn')

    //NEW TABS
//    const [newtab] = await Promise.all([
//     context.waitForEvent('page'),
//     page.click('//button[text()="New Tab"]')
// ]);

//hover,doubleclick
// await page.locator('//button[text()="Point Me"]').hover()
// await page.locator('//button[text()="Copy Text"]').dblclick()

//drag and drop

// const source=await page.locator('//div[@id="draggable"]')
// const target=page.locator('//div[@id="droppable"]')
// await source.dragTo(target);
// await page.waitForTimeout(3000);

//labels

//  let mobiles=['//label[@id="samsung"]','//label[@id="realme"]']
//  for (let labels of mobiles){
//     let noOfLabels= await page.locator(labels).innerText()
//     console.log('No of labels',noOfLabels)
//     // console.log('No of labels', await noOfLabels.length)
// }
// let mobiless=await page.locator('#mobiles label').all()
// let size=mobiless.length
// for(let i=0;i<size;i++){
//     console.log(`${i+1} Labels are : ${await mobiless[i].innerText()}`)
// }

//shadow dom

//console.log(await page.locator('#shadow-host').locator('#my-btn').innerText())
console.log(await page.locator('#shadow_host').locator('#nested_shadow_content div').innerText())

//sceenshort

await page.screenshot({path:'practice.png'})
await page.screenshot({path:'fullpagescreenshort.png',fullPage:true})



//scroll down
await page.evaluate(() => {
  window.scrollTo(0, 500); // Scrolls down 500 pixels
});







})



