
    function toggleTheme() {
      document.body.classList.toggle('dark-mode');
    }

    function scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
