
// Hero Buttons Menu

const menuButtons = document.querySelectorAll('.hero-button');

const projectMenus = document.querySelectorAll('.project-menu')

const projectButtons = document.querySelectorAll('.project-menu .project-button');

const firstTenButtons = document.querySelectorAll('#first-ten .project-button');

const secondTenButtons = document.querySelectorAll('#second-ten .project-button');

const thirdTenButtons = document.querySelectorAll('#third-ten .project-button');

const fourthTenButtons = document.querySelectorAll('#fourth-ten .project-button');

const fifthTenButtons = document.querySelectorAll('#fifth-ten .project-button');


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
    buttons[i].classList.add('show');
    await sleep(42);
    i++;
  }
};

const hideButtons = async (buttons)=> {

  let i = 0
  while (i < buttons.length) {

    console.log(i);
    buttons[i].classList.remove('show');
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

    hideButtons(projectButtons);

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

// Project 1 - Expanding cards
const panes = document.querySelectorAll('.p1-pane');

panes.forEach(pane => {

  pane.addEventListener('click', function(e) {

    panes.forEach(pane => {pane.classList.remove('show')});
    console.log(this.id);
    if (this.classList.contains('show')) {

      return;
    } else {

      this.classList.add('show');
    }
  })
});

// Project 2 - Progress Steps
const steps = document.querySelectorAll('.progress-step');

const progressButtons = document.querySelectorAll('.progress-button');

const progressLine = document.getElementById('progress-line');

//const btnPre = progressButtons[0];
//const btnNext = progressButtons[1];

let progresStep = 1;

progressButtons.forEach(button => {

  button.addEventListener('click', function (e) {

    if (this.id == 'progress-previous') {

      if (progresStep > 1) {

        progresStep--;
      }

    } else if (this.id == 'progress-next') {

      if (progresStep < steps.length) {

        progresStep++;
      }
    }

    updateStep();
  });
})

function updateStep() {

  console.log("enter update");
  console.log(steps);

  steps.forEach((step, stepIndex) => {

    console.log("stepIndex is " + stepIndex);
    if (stepIndex < progresStep) {

      step.classList.add('show');
    } else {

      step.classList.remove('show')
    }

    let shown = document.querySelectorAll('.show.progress-step');

    console.log(progressLine.style.width);

    console.log("Maths");
    console.log(shown.length);
    console.log(steps.length);
    console.log("Maths");

    progressLine.style.width = (shown.length - 1) / (steps.length - 1) * 100 + '%';

    console.log(progressLine.style.width);

    if (progresStep == 1) {

      progressButtons[0].classList.add('not-show');
    } else if (progresStep == steps.length) {

      progressButtons[1].classList.add('not-show');
    } else {

      progressButtons[0].classList.remove('not-show');
      progressButtons[1].classList.remove('not-show');
    }

  });
}


