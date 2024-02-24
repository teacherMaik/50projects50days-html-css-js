

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

  card.addEventListener('click', function(e) {

    cards.forEach(card => {card.classList.remove('active')});
    console.log(this);
    if (this.classList.contains('active')) {
      return;
    } else {
      this.classList.add('active');

    }
  })

});
