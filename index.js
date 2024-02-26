
// Hero Buttons Menu

const menuButtons = document.querySelectorAll('.hero-button');

const projectMenus = document.querySelectorAll('.project-menu')

const projectButtons = document.querySelectorAll('.project-menu .btn');

const firstTenButtons = document.querySelectorAll('#first-ten .btn');

const secondTenButtons = document.querySelectorAll('#second-ten .btn');

const thirdTenButtons = document.querySelectorAll('#third-ten .btn');

const fourthTenButtons = document.querySelectorAll('#fourth-ten .btn');

const fifthTenButtons = document.querySelectorAll('#fifth-ten .btn');


// sleep Function for pause. Can be used for different times by modifying the time input
function sleep(ms) {
  return new Promise ((resolve) => setTimeout(resolve, ms));
};

// Checks to see if typewriter div is in viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const displayButtons = async (buttons) => {

  let i = 0
  while (i < buttons.length) {

    console.log(i);
    buttons[i].classList.remove('invisible');
    buttons[i].classList.add('visible');
    await sleep(42);
    i++;
  }
};

const removeButtons = async (buttons)=> {

  let i = 0
  while (i < buttons.length) {

    console.log(i);
    buttons[i].classList.remove('visible');
    buttons[i].classList.add('invisible');
    i++;
  }
}

menuButtons.forEach(button => {
  button.addEventListener('click', function(e) {

    console.log(this.id);

    projectMenus.forEach(menu => {
      
      menu.classList.remove('visible');
      menu.classList.add('invisible');
    });

    removeButtons(projectButtons);

    switch (this.id) {

      case 'p1-10':
        console.log("case 1");
        projectMenus[0].classList.remove('invisible');
        projectMenus[0].classList.add('visible');
        displayButtons(firstTenButtons);
        break;

      case 'p11-20':
        projectMenus[1].classList.remove('invisible');
        projectMenus[0].classList.add('visible');
        displayButtons(secondTenButtons);
        break;

      case 'p21-30':
        projectMenus[2].classList.remove('invisible');
        projectMenus[0].classList.add('visible');
        displayButtons(thirdTenButtons);
        break;

      case 'p31-40':
        projectMenus[3].classList.remove('invisible');
        projectMenus[0].classList.add('visible');
        displayButtons(fourthTenButtons);
        break;

      case 'p41-50':
        projectMenus[4].classList.remove('invisible');
        projectMenus[0].classList.add('visible');
        displayButtons(fifthTenButtons);
        break;
    }
  });
});

// Project 1 - Expandisg cards
const panes = document.querySelectorAll('.p1-pane');

panes.forEach(pane => {

  pane.addEventListener('click', function(e) {

    panes.forEach(pane => {pane.classList.remove('active')});
    console.log(this.id);
    if (this.classList.contains('active')) {

      return;
    } else {

      this.classList.add('active');
    }
  })
});
