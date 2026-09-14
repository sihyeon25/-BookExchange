// 페이지 진입 시 살짝 페이드인, 내부 링크 클릭 시 페이드아웃 후 이동
document.documentElement.style.opacity = '0';

window.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.transition = 'opacity 0.25s ease';
  requestAnimationFrame(() => {
    document.documentElement.style.opacity = '1';
  });
});

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href]');
  if (!link) return;

  const href = link.getAttribute('href');
  const isInternal = href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:');
  const opensNewTab = link.target === '_blank';

  if (isInternal && !opensNewTab) {
    event.preventDefault();
    document.documentElement.style.opacity = '0';
    setTimeout(() => {
      window.location.href = href;
    }, 200);
  }
});
