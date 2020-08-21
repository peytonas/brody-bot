const puppeteer = require('puppeteer');
let imgs;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://inspirobot.me/');
  await page.click('.btn-text')
  await page.waitFor(1500)
  imgs = await page.$$eval('.generator img[src]', imgs => imgs.map(img => img.getAttribute('src')));
  console.log(imgs[0]);
  await browser.close();
})();
