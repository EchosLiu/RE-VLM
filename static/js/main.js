document.addEventListener('DOMContentLoaded', function () {

  // BibTeX copy button
  var copyBtn = document.getElementById('copyBibtex');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var code = copyBtn.closest('.bibtex-block').querySelector('code');
      if (!code) return;
      navigator.clipboard.writeText(code.textContent).then(function () {
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(function () {
          copyBtn.classList.remove('copied');
          copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
        }, 2000);
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Intersection Observer for scroll animations
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(
    '.contribution-card, .pipeline-step, .stage, .dataset-card, ' +
    '.table-block, .qualitative-example, .method-subsection'
  ).forEach(function (el) {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });

  // Add CSS for scroll animation
  var style = document.createElement('style');
  style.textContent =
    '.animate-on-scroll { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease-out, transform 0.5s ease-out; }' +
    '.animate-on-scroll.visible { opacity: 1; transform: translateY(0); }';
  document.head.appendChild(style);
});
