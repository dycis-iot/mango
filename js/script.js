// 모바일 메뉴 토글
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navCta = document.querySelector('.nav-cta');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      navCta.classList.toggle('open');
    });
  }

  // 현재 페이지에 해당하는 메뉴에 active 클래스 부여
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
