const puppeteer = require('puppeteer');

async function scrapeGoogleWx(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto(url, {
        waitUntil: 'load',
        timeout: 0
    });

    //#region Now
    const [temp] = await page.$x('//*[@id="wob_tm"]'); //cur temp
    var txt = await temp.getProperty('textContent');
    const curTemp = await txt.jsonValue();
    const lastUpdate = new Date();

    const [precip] = await page.$x('//*[@id="wob_pp"]'); //precipitation
    txt = await precip.getProperty('textContent');
    const rain = await txt.jsonValue();

    const [humid] = await page.$x('//*[@id="wob_hm"]'); //humidity
    txt = await humid.getProperty('textContent');
    const humidity = await txt.jsonValue();

    const [wind] = await page.$x('//*[@id="wob_ws"]'); //wind
    txt = await wind.getProperty('textContent');
    const curWind = await txt.jsonValue();   
    //#endregion

    //#region Today 
    const [H1] = await page.$x('//*[@id="wob_dp"]/div[1]/div[1]'); //Head (day of week)
    txt = await H1.getProperty('textContent');
    const head1 = await txt.jsonValue();

    const [I1] = await page.$x('//*[@id="wob_dp"]/div[1]/div[2]/img'); //wx image
    txt = await I1.getProperty('src');
    var img1 = await txt.jsonValue();
    img1 = img1.replace("48", "64");

    const [Alt1] = await page.$x('//*[@id="wob_dp"]/div[1]/div[2]/img'); //img alt text
    txt = await Alt1.getProperty('alt');
    const altImg1 = await txt.jsonValue();

    const [Hi1] = await page.$x('//*[@id="wob_dp"]/div[1]/div[3]/div[1]/span[1]'); //High
    txt = await Hi1.getProperty('textContent');
    const high1 = await txt.jsonValue();  

    const [Lo1] = await page.$x('//*[@id="wob_dp"]/div[1]/div[3]/div[2]/span[1]'); //Low
    txt = await Lo1.getProperty('textContent');
    const low1 = await txt.jsonValue();
    //#endregion

    //#region tomorrow
    const [H2] = await page.$x('//*[@id="wob_dp"]/div[2]/div[1]'); //Head (day of week)
    txt = await H2.getProperty('textContent');
    const head2 = await txt.jsonValue();

    const [I2] = await page.$x('//*[@id="wob_dp"]/div[2]/div[2]/img'); //wx image path
    txt = await I2.getProperty('src');
    var img2 = await txt.jsonValue();
    img2 = img2.replace("48", "64");

    const [Alt2] = await page.$x('//*[@id="wob_dp"]/div[2]/div[2]/img'); //img alt text
    txt = await Alt2.getProperty('alt');
    const altImg2 = await txt.jsonValue();

    const [Hi2] = await page.$x('//*[@id="wob_dp"]/div[2]/div[3]/div[1]/span[1]'); //High
    txt = await Hi2.getProperty('textContent');
    const high2 = await txt.jsonValue();  

    const [Lo2] = await page.$x('//*[@id="wob_dp"]/div[2]/div[3]/div[2]/span[1]'); //Low
    txt = await Lo2.getProperty('textContent');
    const low2 = await txt.jsonValue();  
    //#endregion  

    //#region Plus 2 days
    const [H3] = await page.$x('//*[@id="wob_dp"]/div[3]/div[1]'); //Head (day of week)
    txt = await H3.getProperty('textContent');
    const head3 = await txt.jsonValue();

    const [I3] = await page.$x('//*[@id="wob_dp"]/div[3]/div[2]/img'); //wx image path
    txt = await I3.getProperty('src');
    var img3 = await txt.jsonValue();
    img3 = img3.replace("48", "64");

    const [Alt3] = await page.$x('//*[@id="wob_dp"]/div[3]/div[2]/img'); //img alt text
    txt = await Alt3.getProperty('alt');
    const altImg3 = await txt.jsonValue();

    const [Hi3] = await page.$x('//*[@id="wob_dp"]/div[3]/div[3]/div[1]/span[1]'); //High
    txt = await Hi3.getProperty('textContent');
    const high3 = await txt.jsonValue();  

    const [Lo3] = await page.$x('//*[@id="wob_dp"]/div[3]/div[3]/div[2]/span[1]'); //Low
    txt = await Lo3.getProperty('textContent');
    const low3 = await txt.jsonValue(); 
    //#endregion    

    //#region Plus 3 days
    const [H4] = await page.$x('//*[@id="wob_dp"]/div[4]/div[1]'); //Head (day of week)
    txt = await H4.getProperty('textContent');
    const head4 = await txt.jsonValue();

    const [I4] = await page.$x('//*[@id="wob_dp"]/div[4]/div[2]/img'); //wx image path
    txt = await I4.getProperty('src');
    var img4 = await txt.jsonValue();
    img4 = img4.replace("48", "64");

    const [Alt4] = await page.$x('//*[@id="wob_dp"]/div[4]/div[2]/img'); //img alt text
    txt = await Alt4.getProperty('alt');
    const altImg4 = await txt.jsonValue();

    const [Hi4] = await page.$x('//*[@id="wob_dp"]/div[4]/div[3]/div[1]/span[1]'); //High
    txt = await Hi4.getProperty('textContent');
    const high4 = await txt.jsonValue();  

    const [Lo4] = await page.$x('//*[@id="wob_dp"]/div[4]/div[3]/div[2]/span[1]'); //Low
    txt = await Lo4.getProperty('textContent');
    const low4 = await txt.jsonValue();  
    //#endregion
    
    //#region Plus 4 days
    const [H5] = await page.$x('//*[@id="wob_dp"]/div[5]/div[1]'); //Head (day of week)
    txt = await H5.getProperty('textContent');
    const head5 = await txt.jsonValue();

    const [I5] = await page.$x('//*[@id="wob_dp"]/div[5]/div[2]/img'); //wx image path
    txt = await I5.getProperty('src');
    var img5 = await txt.jsonValue();
    img5 = img5.replace("48", "64");

    const [Alt5] = await page.$x('//*[@id="wob_dp"]/div[5]/div[2]/img'); //img alt text
    txt = await Alt5.getProperty('alt');
    const altImg5 = await txt.jsonValue();

    const [Hi5] = await page.$x('//*[@id="wob_dp"]/div[5]/div[3]/div[1]/span[1]'); //High
    txt = await Hi5.getProperty('textContent');
    const high5 = await txt.jsonValue();  

    const [Lo5] = await page.$x('//*[@id="wob_dp"]/div[5]/div[3]/div[2]/span[1]'); //Low
    txt = await Lo5.getProperty('textContent');
    const low5 = await txt.jsonValue();  
    //#endregion  

    //console.log("scrapers.js/scrapeGoogleWx was hit");

    browser.close();

    return {
        curTemp, rain, humidity, curWind,
        head1, img1, altImg1, high1, low1,
        head2, img2, altImg2, high2, low2,
        head3, img3, altImg3, high3, low3,
        head4, img4, altImg4, high4, low4,
        head5, img5, altImg5, high5, low5,
        lastUpdate
    }
    
}

async function scrapeForVerboseForecast(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto(url, {
        waitUntil: 'load',
        timeout: 0
    });

    //console.log("hit Verbose function");

    const [day] = await page.$x('//*[@id="wrapper"]/div[3]/div/div[2]/div[1]/div/div/div[2]/div/div/div/div[3]/div[1]/p'); //Day 
    var txt = await day.getProperty('textContent');
    const todayVerbose = await txt.jsonValue();

    const [night] = await page.$x('//*[@id="wrapper"]/div[3]/div/div[2]/div[1]/div/div/div[2]/div/div/div/div[3]/div[2]/p'); //Night
    txt = await night.getProperty('textContent');
    const tonightVerbose = await txt.jsonValue();   

    browser.close();

    return {todayVerbose, tonightVerbose}
}

module.exports = {
    scrapeGoogleWx,
    scrapeForVerboseForecast
}