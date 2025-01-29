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
  