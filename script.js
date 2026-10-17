// Exercise 3: ปุ่มเปลี่ยนข้อความ (สลับไปมา)
const statusEl = document.querySelector('#status');
const helloBtn = document.querySelector('#helloBtn');
helloBtn.addEventListener('click', () => {
  const isHello = statusEl.textContent === 'Hello from GitHub Pages!';
  statusEl.textContent = isHello ? 'Ready to deploy' : 'Hello from GitHub Pages!';
});

// Exercise 3: ปุ่ม Toggle Theme (จำค่าไว้แม้รีเฟรช)
const themeBtn = document.querySelector('#themeBtn');
function applyTheme(dark) {
  document.body.classList.toggle('dark', dark);
  themeBtn.textContent = dark ? '☀️ Light' : '🌙 Dark';
}
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
applyTheme(saved === 'dark');
themeBtn.addEventListener('click', () => {
  const dark = !document.body.classList.contains('dark');
  applyTheme(dark);
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
});
