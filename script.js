document.getElementById('year').textContent = new Date().getFullYear();

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const terminal = document.getElementById('terminalCode');
const terminalCard = document.querySelector('.terminal-card');

if (terminal) {
  const baseText = `$ whoami
AndreyCatser

$ stack --show
Python
JavaScript
API integration
Automation
Marketplace plugins

$ targets
FunPay Cardinal
FunPay Pulse
FunPay Tools

$ mission
Создавать плагины,
которые реально
облегчают жизнь
продавцам.`;

  const randomDelay = (base, spread = 10) => base + Math.floor(Math.random() * spread);

  async function appendText(text, speed = 14) {
    for (const char of text) {
      terminal.textContent += char;
      await sleep(char === "\n" ? speed * 3 : randomDelay(speed, 12));
    }
  }

  async function eraseSmooth(speed = 9) {
    while (terminal.textContent.length > 0) {
      terminal.textContent = terminal.textContent.slice(0, -1);
      await sleep(speed);
    }
  }

  async function softClear() {
    await appendText(`

$ clear`, 16);
    await sleep(700);

    terminalCard?.classList.add('terminal-clearing');
    await sleep(420);

    await eraseSmooth(7);

    terminalCard?.classList.remove('terminal-clearing');
    await sleep(650);
  }

  async function terminalLoop() {
    await sleep(350);

    while (true) {
      terminal.textContent = '';
      await appendText(baseText, 12);
      await sleep(5000);
      await softClear();
    }
  }

  terminalLoop();
}
