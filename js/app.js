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
