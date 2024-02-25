
// Hero Buttons Menu

const menuButtons = document.querySelectorAll('.hero-button');

const projectMenus = document.querySelectorAll('.project-menu')

const projectButtons = document.querySelectorAll('.project-menu .btn');

const drape = document.querySelector('.drape');

menuButtons.forEach(button => {
  button.addEventListener('click', function(e) {

    console.log(this.id);
    console.log(projectButtons);
    console.log(projectButtons.length);

    projectMenus.forEach(menu => {menu.classList.add('invisible')});

    switch (this.id) {

      case 'p1-10':
        drape.classList.add('active');
        projectMenus[0].classList.remove('invisible');
        drape.classList.remove('active');
        break;

      case 'p11-20':
        drape.classList.add('active');
        projectMenus[1].classList.remove('invisible');
        drape.classList.remove('active');
        break;

      case 'p21-30':
        drape.classList.add('active');
        projectMenus[2].classList.remove('invisible');
        drape.classList.remove('active');
        break;

      case 'p31-40':
        drape.classList.add('active');
        projectMenus[3].classList.remove('invisible');
        drape.classList.remove('active');
        break;

      case 'p41-50':
        drape.classList.add('active');
        projectMenus[4].classList.remove('invisible');
        drape.classList.remove('active');
        break;
    }

  });
});


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
