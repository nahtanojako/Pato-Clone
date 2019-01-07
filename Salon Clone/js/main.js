(function(){
  let navbar = document.querySelector('.navbar');
  let navToggler = document.querySelector('.navbar-toggler');
  let navbarCollapse = document.querySelector('.navbar-collapse');

  function showNavbar() {
    navbarCollapse.classList.toggle('show')
  }

  function navbarFixed() {
    let navbarOffsetTop = navbar.offsetTop;
    if(window.pageYOffset > navbarOffsetTop) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  }

  navToggler.addEventListener('click', showNavbar)
  window.addEventListener('scroll', navbarFixed);
})()