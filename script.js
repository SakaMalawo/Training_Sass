document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('#menu').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    let carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach( function(carousel) {
      let items = carousel.querySelectorAll('.carousel-item');
      let indicators = carousel.querySelectorAll('.carousel-indicators li');
      let currentItem = 0;
      
      function goToItem(index) {
        items[currentItem].classList.remove('active');
        indicators[currentItem].classList.remove('active');
        currentItem = index;
        items[currentItem].classList.add('active');
        indicators[currentItem].classList.add('active');
      }
  
      function nextItem() {
        goToItem((currentItem + 1) % items.length);
      }
  
      function prevItem() {
        goToItem((currentItem - 1 + items.length) % items.length);
      }
  
      carousel.querySelector('.carousel-control-left').addEventListener( 'click', prevItem );
      carousel.querySelector('.carousel-control-right').addEventListener( 'click', nextItem );
  
      indicators.forEach( function(indicator, index) {
        indicator.addEventListener('click', function() {
          goToItem(index);
        });
      });
      
      goToItem(currentItem);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    let focusSections = document.querySelectorAll("#focusOne p, #focusTwo p");

    function checkVisibility() {
        focusSections.forEach(section => {
            let rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.style.opacity = 1;
                section.style.transform = "translateX(0)";
                section.style.transition = "transform 2s ease-in-out, opacity 2s ease-in-out";
            } else {
                section.style.opacity = 0;
                section.style.transform = "translateX(-100%)";
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

  