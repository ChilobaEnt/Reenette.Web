const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const outLogs = [];
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => {
    const text = msg.text();
    const type = msg.type();
    outLogs.push({ kind: 'console', type, text });
    console.log('[console]', type, text);
  });

  page.on('pageerror', err => {
    outLogs.push({ kind: 'pageerror', message: err.message, stack: err.stack });
    console.error('[pageerror]', err.message);
  });

  page.on('requestfailed', req => {
    outLogs.push({ kind: 'requestfailed', url: req.url(), failure: req.failure() && req.failure().errorText });
    console.warn('[requestfailed]', req.url(), req.failure() && req.failure().errorText);
  });

  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 30000 });
    await page.screenshot({ path: 'capture_screenshot.png', fullPage: true });
    const html = await page.content();
    fs.writeFileSync('capture_page.html', html);
  } catch (e) {
    console.error('Navigation or capture failed:', e && e.message ? e.message : e);
    outLogs.push({ kind: 'fatal', error: e && e.message ? e.message : String(e) });
  } finally {
    await browser.close();
    fs.writeFileSync('console_logs.json', JSON.stringify(outLogs, null, 2));
    console.log('Wrote console_logs.json and capture_screenshot.png');
  }
})();
