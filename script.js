
  function changeSlide(index) {
    var slides = document.querySelectorAll('.slide');
    var dots = document.querySelectorAll('.dot');
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      dots[i].classList.remove('active');
    }
    slides[index].style.display = 'block';
    dots[index].classList.add('active');
  }


  