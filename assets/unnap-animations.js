(function() {
  'use strict';

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function initProblemCountdown() {
    var section = document.querySelector('.unnap-problem');
    if (!section) return;
    var values = section.querySelectorAll('.unnap-problem__card-value');
    if (values.length !== 3) return;

    var delays = [0, 500, 1000];
    var duration = 2000;
    var startVal = 100;

    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        io.disconnect();
        var startTime = null;
        function tick(timestamp) {
          if (!startTime) startTime = timestamp;
          var elapsed = timestamp - startTime;
          for (var i = 0; i < 3; i++) {
            var delay = delays[i];
            if (elapsed < delay) {
              values[i].textContent = '100%';
            } else {
              var animElapsed = elapsed - delay;
              var progress = Math.min(animElapsed / duration, 1);
              var eased = easeOutCubic(progress);
              var value = Math.round(startVal * (1 - eased));
              values[i].textContent = value + '%';
            }
          }
          if (elapsed < 1000 + duration) requestAnimationFrame(tick);
          else {
            values[0].textContent = '0%';
            values[1].textContent = '0%';
            values[2].textContent = '0%';
          }
        }
        requestAnimationFrame(tick);
      });
    }, { rootMargin: '-100px 0px', threshold: 0 });
    io.observe(section);
  }

  function initScrollAnimations() {
    var els = document.querySelectorAll('.unnap-animate');
    if (!els.length) return;
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('unnap-animate--in');
        }
      });
    }, { rootMargin: '-50px 0px', threshold: 0 });
    els.forEach(function(el) { io.observe(el); });
  }

  function init() {
    initScrollAnimations();
    initProblemCountdown();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
