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





                // Enable smooth scroll for anchor links
              //  document.querySelectorAll('.scroll-link').forEach(link => {
               //     link.addEventListener('click', function(e) {
                //        const href = this.getAttribute('href');
                //        if (href && href.startsWith('#')) {
                //            e.preventDefault();
                 //           const target = document.querySelector(href);
                 //           if (target) {
                //                target.scrollIntoView({ behavior: 'smooth' });
                //            }
                //        }
               //     });
               // });



                //prøver at fikse menuerne


                document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".menu-scroll a.scroll-link");
  const divs = document.querySelectorAll(".menu-section");
  const sushiSubmenu = document.getElementById("sushiSubmenu");

  function hideAllSections() {
    const divs = document.querySelectorAll(".menu-section");
    divs.forEach(div => {
      div.style.display = "none";
    });
  }


  

  // Show the first section by default when the page loads
  hideAllSections();
  if (divs.length > 0) {
    divs[0].style.display = "block";
    navLinks[0].classList.add("active");
  }

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      if (!targetId.startsWith("#")) return;

      const targetSection = document.querySelector(targetId);
      if (!targetSection) return;

      // Hide all sections
      hideAllSections();

      // Show the selected section
      targetSection.style.display = "block";

      // Active class handling
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Sushi submenu logic
      const allowedIds = ["#sushi", "#maki", "#uramaki", "#tempura", "#nigiri", "#ikkefisk"];
      if (!allowedIds.includes(targetId)) {
        sushiSubmenu.style.display = "none";
      }

      // Allow normal anchor scrolling
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});
                



//TIL SPECIFIKT SUSHI button
document.addEventListener('DOMContentLoaded', function () {
                const sushiBtn = document.getElementById('sushiBtn');
                const sushiSubmenu = document.getElementById('sushiSubmenu');
                sushiBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    sushiSubmenu.style.display = (sushiSubmenu.style.display === 'none' || sushiSubmenu.style.display === '') ? 'flex' : 'none';
                });
            });