/* =====================================================
   망고띵 공통 스크립트
   ===================================================== */

// 햄버거 메뉴 토글
const ham        = document.querySelector('.gnb-ham');
const mobileMenu = document.querySelector('.mobile-menu');

if (ham && mobileMenu) {
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow =
      mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // 메뉴 링크 클릭 시 닫기
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      ham.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// 현재 페이지 메뉴 active 표시
document.querySelectorAll('.gnb-menu a').forEach(link => {
  if (link.href === location.href) link.classList.add('active');
});

// 스크롤 시 네비 그림자
window.addEventListener('scroll', () => {
  const gnb = document.querySelector('.gnb');
  if (!gnb) return;
  gnb.style.boxShadow = scrollY > 10
    ? '0 2px 20px rgba(0,0,0,.08)'
    : 'none';
});
