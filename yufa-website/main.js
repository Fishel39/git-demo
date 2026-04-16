/* main.js — 宿州市宇发农业物资有限公司网站交互 */

/* ===== 导航移动端开关 ===== */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // 点击菜单项后关闭
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

/* ===== 导航滚动高亮 ===== */
const sections = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const highlightNav = () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top <= 80) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('nav-active', a.getAttribute('href') === '#' + current);
  });
};
window.addEventListener('scroll', highlightNav, { passive: true });
highlightNav();

/* ===== 滚动入场动画 ===== */
const fadeEls = document.querySelectorAll('.fade-up');
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  }),
  { threshold: 0.10 }
);
fadeEls.forEach(el => revealObserver.observe(el));

/* ===== 导航背景随滚动加深 ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 3px 18px rgba(0,0,0,.14)'
      : '0 2px 14px rgba(0,0,0,.09)';
  }
}, { passive: true });
