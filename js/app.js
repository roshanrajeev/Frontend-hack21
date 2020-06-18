//Shapes animation

(function shapesTranform() {
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

(function abtBgAnim() {
  window.addEventListener('scroll', function(e) {
    const bg = document.querySelector('.about__bg');
    const bgRect = bg.getBoundingClientRect();
    if(bgRect.top < 760) {
      let opacity = (bgRect.top + 450) / 1210;
      bg.style.color = `rgba(17, 17, 17, ${opacity})`;
      // console.log(opacity);
    }
  });
})();

//fade in top 

(function fadeintop() {
  const heading = document.querySelector('.about__heading-animated');
  window.addEventListener('scroll', function(e) {
    const bg = document.querySelector('.about__bg');
    const bgRect = bg.getBoundingClientRect();
    if(bgRect.top < 760) {
      let opacity = 1 - (bgRect.top-300) / 460;
      let pos = (-1 * opacity + 1) * 100
      heading.style.opacity = opacity;
      heading.style.transform = `translateY(-${pos}px)`;
      console.log(pos);

    }
  });
})()