document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 800, once: true });

  if (window.Typed) {
    new Typed('#typed', {
      strings: [
        'Software Developer (Python/Flask)',
        'Frontend with React & Vue',
        'ML tinkerer — Scikit-learn & BERT',
        'I ship ideas to production 🚀'
      ],
      typeSpeed: 35,
      backSpeed: 16,
      backDelay: 1400,
      loop: true
    });
  }

  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;

  // Apply stored theme on page load
  const stored = localStorage.getItem('theme');
  if (stored) {
    root.setAttribute('data-theme', stored);
    btn.textContent = stored === 'light' ? '🌙' : '☀️';
  } else {
    root.setAttribute('data-theme', 'light');
    btn.textContent = '🌙';
  }

  // Toggle theme on button click
  btn?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    btn.textContent = next === 'light' ? '🌙' : '☀️';
  });
});
