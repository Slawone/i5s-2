let acc = document.querySelectorAll('.accordion');

acc.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('active');
      return;
    }
    acc.forEach((e) => e.classList.remove('active'));
    e.target.classList.add('active');
  });
});
