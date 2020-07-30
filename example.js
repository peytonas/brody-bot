const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://inspirobot.me/');
  await page.click('.btn-text')
  await page.screenshot({ path: 'example1.png' })
  await page.screenshot({ path: 'example2.png' })
  await page.screenshot({ path: 'example3.png' })
  await page.screenshot({ path: 'example4.png' })
  await page.screenshot({ path: 'example5.png' })
  await page.screenshot({ path: 'example6.png' })
  await page.screenshot({ path: 'example7.png' })
  await page.screenshot({ path: 'example8.png' })
  // await page.click('.generated-image')
  const imgs = await page.$$eval('.generator img[src]', imgs => imgs.map(img => img.getAttribute('src')));
  console.log(imgs[0]);
  await browser.close();
})();