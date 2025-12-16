const menuItems = document.querySelectorAll('.menu-scroll a');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });


  /*kode for menu boksene (altså med sushi osv)*/


  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const section = button.nextElementSibling;

      section.classList.toggle('expanded');
      section.classList.toggle('collapsed');

      button.textContent = section.classList.contains('expanded')
        ? 'Collapse'
        : 'Expand';
    });
  });


  
  document.addEventListener('DOMContentLoaded', function () {
                    const sushiBtn = document.getElementById('sushiBtn');
                    const submenu = document.getElementById('sushiSubmenu');
                    sushiBtn.addEventListener('click', function (e) {
                        e.preventDefault();
                        submenu.style.display = submenu.style.display === 'none' ? 'flex' : 'none';
                    });
                });




                // Enable smooth scroll for anchor links
                document.querySelectorAll('.scroll-link').forEach(link => {
                    link.addEventListener('click', function(e) {
                        const href = this.getAttribute('href');
                        if (href && href.startsWith('#')) {
                            e.preventDefault();
                            const target = document.querySelector(href);
                            if (target) {
                                target.scrollIntoView({ behavior: 'smooth' });
                            }
                        }
                    });
                });