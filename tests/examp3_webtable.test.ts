import {test} from '@playwright/test'
test('webTable',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table=await page.locator('#productTable');
    await page.waitForTimeout(2000);
    //total number of columns
    const columns=table.locator('thead tr th');
    const total_column=await columns.count()
    console.log('total no of colum',total_column);
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
    await page.waitForTimeout(2000)
})