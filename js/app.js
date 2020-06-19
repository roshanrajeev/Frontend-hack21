//Shapes animation

(function() {
  setTimeout(function() {
    if(document.readyState !== 'loading') {
        console.log("loading");
        fireEvent();
    } else {
      window.addEventListener('load', (event) => {
        console.log("load");
        fireEvent();
      });
    }

    function fireEvent() {
      document.querySelector('.loader').style.display = 'none';
      document.body.style.overflowY = 'visible';
    }
  }, 15000);
  // 15000
})();


(function() {
  const fast = document.getElementById('fast');
  const slow = document.getElementById('slow');
  const medium = document.getElementById('medium');
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function(e) {
    let xfast = Math.floor((window.pageYOffset/header.offsetHeight)*151);
    let xslow = Math.floor((window.pageYOffset/header.offsetHeight)*121);
    let xmedium = Math.floor((window.pageYOffset/header.offsetHeight)*101);
  
    fast.style.transform = `translateY(-${xfast}px)`;
    slow.style.transform = `translateY(-${xslow}px)`;
    medium.style.transform = `translateY(-${xmedium}px)`;
  });

})();

//About bg anim

(function() {
  window.addEventListener('scroll', function(e) {
    const bg = document.querySelector('.about__bg');
    const bgRect = bg.getBoundingClientRect();
    if(bgRect.top < 760) {
      let opacity = (bgRect.top + 450) / 1210;
      bg.style.color = `rgba(17, 17, 17, ${opacity})`;
    }
  });
})();

//fade in top 

(function() {
  const heading = document.querySelector('.about__heading-animated');
  window.addEventListener('scroll', function(e) {
    const bg = document.querySelector('.about__bg');
    const bgRect = bg.getBoundingClientRect();
    if(bgRect.top < 760) {
      let opacity = 1 - (bgRect.top-300) / 460;
      let pos = (-1 * opacity + 1) * 100
      heading.style.opacity = opacity;
      heading.style.transform = `translateY(-${pos}px)`;
    }
  });
})();

//faq section

function freqAsked() {
  const faq = document.querySelector('.faq');
  const qns = document.querySelectorAll('.faq__question');
  const solns = document.querySelectorAll('.faq__solution');

  
  document.body.addEventListener('click', function(e) {
    if(e.target.classList.contains('faq__question')) {
      const soln = e.target.nextElementSibling;
      solns.forEach(function(sol) {
        if(sol.className === 'faq__solution visible' && soln != sol) {
          sol.className = 'faq__solution hidden';
        }
      });

      if(soln.className === 'faq__solution hidden') {
        soln.className = 'faq__solution visible';
      }
      else {
        soln.className = 'faq__solution hidden';
      }
    } else if(e.target.classList.contains('faq__solution')) {
    } else {
      solns.forEach(function(sol) {
        if(sol.className === 'faq__solution visible') {
          sol.className = 'faq__solution hidden';
        }
      });
    }
  })
};

freqAsked();

//sticky navigation
const nav = document.querySelector('.nav');

let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = nav.offsetHeight;

window.addEventListener('scroll', function() {
  didScroll = true;
});

setInterval(function() {
  if(didScroll) {
    hasScrolled();
    didScroll = false;
  }
},250);

function hasScrolled() {
  let st = window.scrollY;

  if(Math.abs(lastScrollTop - st) <= delta)
    return;
  
  if(st > navbarHeight && st > lastScrollTop) {
    nav.className = 'nav hidden';
  } else {
    if(st + window.offsetHeight < document.offsetHeight) {
      $('header').removeClass('nav-up').addClass('nav-down');
    }
    nav.className = 'nav visible';
  }
  lastScrollTop = st;
}


//scroll to location
function scrollToLoc() {
  const navList = document.querySelector('.nav__list');
  navList.addEventListener('click', function(e) {
    if(e.target.parentElement.classList.contains('nav__item')){
      const link = e.target.getAttribute('href');
      const sp = document.querySelector(link).offsetTop;
      let st = sp;
      if(link === '#about') { st = sp - 280; }
      if(link === '#speakers') { st = sp - 100; }
      if(link === '#schedule') { st = sp - 50; }
      if(link === '#rewind') { st = sp - 100; }
      if(link === '#testimonial') { st = sp - 100; }
      if(link === '#faq') { st = sp - 100; }
      window.scrollTo(0, st);
    }
    e.preventDefault();
  })
}
scrollToLoc();

//scheduler animation
// (function() {
//   document.querySelector('.schedule').addEventListener('mouseover', function(e) {
//     if(e.target.className == 'scheduler__container') {
      
//     }
//   })
  
// })();