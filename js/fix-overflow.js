// 가로 스크롤을 유발하는 요소 찾기 및 수정
document.addEventListener('DOMContentLoaded', function() {
  // 뷰포트 너비보다 큰 요소 찾기
  const docWidth = document.documentElement.offsetWidth;
  const elements = document.querySelectorAll('*');
  
  elements.forEach(el => {
    if (el.offsetWidth > docWidth) {
      console.warn('Overflow element found:', el, 'Width:', el.offsetWidth);
      // 문제 요소 강제 수정
      el.style.maxWidth = '100vw';
      el.style.overflowX = 'hidden';
    }
  });
  
  // 전역 스타일 강제 적용
  document.documentElement.style.overflowX = 'hidden';
  document.documentElement.style.maxWidth = '100vw';
  document.documentElement.style.width = '100%';
  
  document.body.style.overflowX = 'hidden';
  document.body.style.maxWidth = '100vw';
  document.body.style.width = '100%';
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  
  // Bootstrap container 수정
  const containers = document.querySelectorAll('.container');
  containers.forEach(container => {
    container.style.maxWidth = '100%';
    container.style.paddingLeft = '15px';
    container.style.paddingRight = '15px';
  });
  
  // Bootstrap row 수정
  const rows = document.querySelectorAll('.row');
  rows.forEach(row => {
    row.style.marginLeft = '0';
    row.style.marginRight = '0';
  });
});