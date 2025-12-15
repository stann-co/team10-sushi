const menuItems = document.querySelectorAll('.menu-scroll a');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });


  /*kode for menu boksene (altså med sushi osv)*/

  const toggleBtn = document.getElementById('toggleView');
  const cardNav = document.getElementById('cardNav');

  toggleBtn.addEventListener('click', () => {
    const isCollapsed = cardNav.classList.contains('collapsed');

    cardNav.classList.toggle('collapsed', !isCollapsed);
    cardNav.classList.toggle('expanded', isCollapsed);

    toggleBtn.textContent = isCollapsed ? 'Collapse' : 'Expand';
  });