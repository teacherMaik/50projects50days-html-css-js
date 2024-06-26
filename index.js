
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

function enterVerticalViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 && (rect.bottom <= window.innerHeight || document.documentElement.clientHeight)
  );
}

const displayButtons = async (buttons) => {

  let i = 0
  while (i < buttons.length) {

    buttons[i].classList.add('show');
    await sleep(42);
    i++;
  }
};

const hideButtons = async (buttons)=> {

  let i = 0
  while (i < buttons.length) {

    buttons[i].classList.remove('show');
    i++;
  }
}

menuButtons.forEach(button => {
  button.addEventListener('click', function(e) {

    projectMenus.forEach(menu => {
      
      menu.classList.remove('visible');
      menu.classList.add('invisible');
    });

    hideButtons(projectButtons);

    switch (this.id) {

      case 'p1-10':
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

  steps.forEach((step, stepIndex) => {

    if (stepIndex < progresStep) {

      step.classList.add('show');
    } else {

      step.classList.remove('show')
    }

    let shown = document.querySelectorAll('.show.progress-step');

    progressLine.style.width = (shown.length - 1) / (steps.length - 1) * 100 + '%';

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

// Project 3
const p3Open = document.getElementById('open')
const p3Close = document.getElementById('close')
const p3Container = document.querySelector('.content-container')

p3Open.addEventListener('click', () => p3Container.classList.add('show-nav'))

p3Close.addEventListener('click', () => p3Container.classList.remove('show-nav'))


// Project 4 - This time I add the styling here with javascript rather than adding a Class
const p4SearchButton = document.querySelector('#p4 .search-button-container');
const p4Input = document.querySelector('#p4 input');

let searchButtonOpen = false;

p4SearchButton.addEventListener('click', () => {

  if (searchButtonOpen == false) {

    p4SearchButton.style.transform ="translateX(162px)";
    p4Input.style.width = "300px";
    searchButtonOpen = true;
  } else if (searchButtonOpen == true) {

    p4SearchButton.style.transform ="translateX(0px)";
    p4Input.style.width = "0px";
    searchButtonOpen = false;
  }
});

// Project 5
const p5LoadingPercent = document.querySelector('#p5 #multi-button');
const p5BgImage = document.querySelector('#p5  .background-img');

let load = 0;

// Visible on webpage has button to click to unblur image with loading percent and when scrolled out of window resets
p5LoadingPercent.addEventListener('click', function() {

  p5LoadingPercent.classList.remove('button-init');
  p5LoadingPercent.classList.add('button-clicked');
  let int = setInterval(blurring, 30);

  p5LoadingPercent.classList.add('clicked');

  function blurring() {
    load++

    if (load > 99) {
      clearInterval(int)

      p5LoadingPercent.classList.remove('button-clicked');
      p5LoadingPercent.classList.add('button-finished');
    }

    p5LoadingPercent.innerText = `${load}%`
    p5LoadingPercent.style.opacity = scale(load, 0, 100, 1, 0)
    p5BgImage.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
  }

  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
});

window.addEventListener('scroll', () => {

  if (!isInViewport(p5LoadingPercent)) {

    load = 0;
    p5LoadingPercent.classList.remove('button-finished');
    p5LoadingPercent.classList.add('button-init');
    p5LoadingPercent.innerText = "Click to load";
    p5LoadingPercent.style.opacity = "1";
    p5BgImage.style.filter = "blur(14px)";
  }
});



// My solution
/*
const displayLoadPercent = async () => {

  let load = 0;

  while (load <= 100) {

    p5LoadingPercent.innerHTML = load + "%";
    load++;
    await sleep(13);
  }
}

window.addEventListener('scroll', function() {

  if (isInViewport(p5LoadingPercent)) {

    async() => {await sleep(200)};

    p5BgImage.style.filter = "blur(0px)";
    p5LoadingPercent.style.opacity = "0";
  
    displayLoadPercent();
  }
});*/

// Author Traversy Solution to trigger when percentage div enters viewport
/* window.addEventListener('scroll', function() {

  if (isInViewport(p5LoadingPercent)) {

    async () => {await sleep(200)};
    let int = setInterval(blurring, 30);

    function blurring() {
      load++
  
      if (load > 99) {
        clearInterval(int)
      }
  
      p5LoadingPercent.innerText = `${load}%`
      p5LoadingPercent.style.opacity = scale(load, 0, 100, 1, 0)
      p5BgImage.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    }
  
    // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    const scale = (num, in_min, in_max, out_min, out_max) => {
      return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }
  } else if (!isInViewport(p5LoadingPercent)) {

    load = 0;
    p5LoadingPercent.innerText = "0%";
    p5LoadingPercent.style.opacity = "1";
    p5BgImage.style.filter = "blur(14px)";
  }
})*/

// Project 6
const p6Container = document.querySelector('section#p6');
const cardContainer = document.querySelector('#p6 .card-container');
const cards = document.querySelectorAll('#p6 .scroll-card');
const card1 = document.querySelector('#scroll-card-1');

window.addEventListener('scroll', function() {

  cards.forEach(card  => {

    if (card.getBoundingClientRect().top < 542) {

      switch (card.classList.contains('card-right')) {

        case true:
          card.style.left = "37.5%";
          break;

        case false:
          card.style.right = "37.5%";
          break;

        default:
          return;
      };
    };
  });

  if (p6Container.getBoundingClientRect().top > 700 || p6Container.getBoundingClientRect().top < -1300) {

    cards.forEach(card  => {
      switch (card.classList.contains('card-right')) {

        case true:
          card.style.left = "100%";
          break;

        case false:
          card.style.right = "100%";
          break;

        default:
          return;
      };
    });
  };
});

// Project 7
const p7LandingLeft = document.querySelector('#p7 #landing-left');
const p7LandingRight = document.querySelector('#p7 #landing-right');

p7LandingLeft.addEventListener('mouseover', () => {

  p7LandingLeft.style.flex = "3";
  p7LandingRight.style.flex = "1";
})

p7LandingRight.addEventListener('mouseover', () => {

  p7LandingLeft.style.flex = "1";
  p7LandingRight.style.flex = "3";
})

// Project 8
const labels = document.querySelectorAll('#p8 .maik-form-control label')

labels.forEach(label => {
  label.innerHTML = label.innerText.split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('');
})

// Project 9 

const soundApplause = {
  "name": "sound1",
  "audio": new Audio("sounds/sound-board_sounds_applause.mp3")
}
const soundBoo = {
  "name": "sound2",
  "audio": new Audio("sounds/sound-board_sounds_boo.mp3")
}
const soundGasp = {
  "name": "sound3",
  "audio": new Audio("sounds/sound-board_sounds_gasp.mp3")
}
const soundTada = {
  "name": "sound4",
  "audio": new Audio("sounds/sound-board_sounds_tada.mp3")
}
const soundVictory = {
  "name": "sound5",
  "audio": new Audio("sounds/sound-board_sounds_victory.mp3")
}
const soundWrong = {
  "name": "sound6",
  "audio": new Audio("sounds/sound-board_sounds_wrong.mp3")
}

const p9Sounds = [soundApplause, soundBoo, soundGasp, soundTada, soundVictory, soundWrong];

const p9SoundButtons = document.querySelectorAll('#p9 .sound-button');

p9SoundButtons.forEach(soundButton => {

  soundButton.addEventListener('click', (e) => {

    p9Sounds.forEach(sound => {

      sound.audio.pause();
      if (e.target.id == sound.name) {

        sound.audio.play();
      }
    });
  });
});

// Project 10
const dadJoke = document.getElementById('dad-joke');
const dadJokeBtn = document.getElementById('new-joke');

dadJokeBtn.addEventListener('click', generateJoke);

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  dadJoke.innerHTML = data.joke
}

// Project 11
const p11CenterContainer = document.querySelector('#p11-center-container');
const p11StartButton = document.querySelector('#p11-start');
const p11IntroContainer = document.querySelector('#p11-intro-container');
const p11KeysContaineer = document.querySelector('#p11-keys-container');

window.addEventListener('scroll', () => {

  if (isInViewport(p11CenterContainer)) {

    window.addEventListener('keydown', () => {

      p11IntroContainer.classList.add('invisible');
      p11KeysContaineer.classList.remove('invisible')
      p11KeysContaineer.classList.add('visible');

      if (p11KeysContaineer.classList.contains('visible')) {

        document.addEventListener('keydown', function(e) {

          if (e.key === ' ') {

            document.getElementById('event-key-val').innerHTML = "Space"
          } else {

            document.getElementById('event-key-val').innerHTML = e.key;
          }
          document.getElementById('event-key-code-val').innerText = e.keyCode;
          document.getElementById('event-code-val').textContent = e.code;
        })
      }
    
    });
  } else {

    p11IntroContainer.classList.remove('invisible');
    p11IntroContainer.classList.add('visible');
    p11KeysContaineer.classList.remove('visible')
    p11KeysContaineer.classList.add('invisible');
  }
});

// Project 12
const p12ToggleButtons = document.querySelectorAll('.faq-card-btn');

let prevFaq;

p12ToggleButtons.forEach(button => {

  button.addEventListener('click', (e) => {

    if (prevFaq) {

      prevFaq.children[0].children[1].style.display = "none";
      prevFaq.style.flex = "0.1";
      prevFaq.children[1].classList.remove('btnActive');
      prevFaq.children[1].innerHTML = "&#8629;"
      prevFaq.style.flex = "0.1";
      prevFaq.classList.remove('shadow');
      prevFaq.classList.remove('cardActive');
      
    }

    e.target.classList.add('btnActive');
    e.target.innerHTML = "&#215;";
    e.target.parentNode.style.flex = "0.2";
    e.target.parentNode.classList.add('cardActive');
    e.target.parentNode.classList.add('shadow');
    e.target.parentNode.children[0].children[1].style.display = "block";
    prevFaq = e.target.parentNode;
    
  })
})

// Project 13
const p13TextArea = document.getElementById('p13-choices');
const p13TagsArea = document.getElementById('p13-tags');

//p13TextArea.focus();

p13TextArea.addEventListener('keyup', (e) => {

  let ltr = e.target.value;
  p13CreateTag(ltr);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
     }, 10);

    p13RandomSelect();
  }

});

function p13CreateTag(input) {

  const tags = input.split(',').filter(tag => tag.trim()!== '').map(tag => tag.trim());
    
    p13TagsArea.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('p13-tag');
        tagEl.innerText = tag;
        p13TagsArea.appendChild(tagEl);
    });
};

function p13RandomSelect () {

  const times = 30
  const interval = setInterval(() => {

    const randomTag = p13PickRandomTag()
    if (randomTag !== undefined) {
      
      randomTag.classList.add('highlight')

      setTimeout(() => {
        
        randomTag.classList.remove('highlight')
      }, 100)
    }
  }, 100);

  setTimeout(() => {
    
    clearInterval(interval);
    setTimeout(() => {

      const randomTag = p13PickRandomTag();
      randomTag.classList.add('highlight');
      }, 100)
    }, times * 100)
};

function p13PickRandomTag() {

  let tags = document.querySelectorAll('.p13-tag');
  return tags[Math.floor(Math.random() * tags.length)];
};

// Project 14
const p14nav = document.getElementById('p14-nav');
const p14toggle = document.getElementById('p14-toggle');

p14toggle.addEventListener('click', function(e) {

  
  /* p14nav.classList.contains('p14-active') ? p14nav.classList.remove('p14-active') : p14nav.classList.add('p14-active'); */

  if (p14nav.classList.contains('p14-active')) {

    p14nav.classList.remove('p14-active');
    p14nav.children[0].style.display = "none";
  } else {
    p14nav.classList.add('p14-active');
    p14nav.children[0].style.display = "flex";
  }

});

/* Project 15 */
const p15Socials = document.querySelector('#p15-instagram');
const p15counters = document.querySelectorAll('.p15-counter');
let p15Trigger = false;

window.addEventListener('scroll', () => {

  isInViewport(p15Socials) ? p15Trigger = true : p15Trigger = false;

  if (p15Trigger) {

    p15counters.forEach(counter => {
      counter.innerHTML = "0";

      const updateP15Count = () => {

        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 210;

        if (count < target) {

          counter.innerHTML = `${Math.ceil(count + increment)}`
          setTimeout(updateP15Count, 1);
        } else {
          counter.innerHTML = target;
        }
      };

      updateP15Count();
    });
  };
});

// Project 16
const p16DrinksSmall = document.querySelectorAll('#p16 .drink');
const p16SmallDrinksDiv = document.getElementById('p16-select-drinks');
const p16BigEmpty = document.getElementById('p16-empty');
const p16BigFull = document.getElementById('p16-full');
const p16HeaderGoal = document.querySelector('#p16-header, h4');
let p16BigTotal = 2;


p16DrinksSmall.forEach(drink => {

  let toDo = '';

  drink.addEventListener('click', (e) => {

    if (!drink.classList.contains('clicked')) {

      drink.classList.remove('bg-light');
      drink.classList.add('clicked');
      updatep16Big('add');
    } else if (drink.classList.contains('clicked')) {
  
      drink.classList.remove('clicked');
      drink.classList.add('bg-light');
      updatep16Big('reduce');
    }
  })
})

function updatep16Big(toDo) {

  const tempClicked = document.querySelectorAll('#p16 .drink.clicked');

  if (tempClicked.length == 0) {

    p16BigFull.style.visibility = "hidden";
    p16BigEmpty.innerHTML = "2L Remaining";
  }

  if (toDo == 'add') {

    p16BigFull.style.visibility = "visible";
    p16BigFull.style.height = `${(tempClicked.length / p16DrinksSmall.length) * 100}%`;
    p16BigFull.innerHTML = `${(tempClicked.length / p16DrinksSmall.length) * 100}%`;

    p16BigEmpty.style.height = `${100 - (tempClicked.length / p16DrinksSmall.length) * 100}%`;
    p16BigEmpty.innerHTML = `${p16BigTotal -= 0.25}L Remaining`

    
  } else if (toDo == 'reduce') {

    p16BigFull.style.height = `${(tempClicked.length / p16DrinksSmall.length) * 100}%`;
    p16BigFull.innerHTML = `${(tempClicked.length / p16DrinksSmall.length) * 100}%`;
    p16BigEmpty.style.height = `${100 - (tempClicked.length / p16DrinksSmall.length) * 100}%`;
    p16BigEmpty.innerHTML = `${p16BigTotal += 0.25}L Remaining`
  }
  
  if (tempClicked.length == p16DrinksSmall.length) {

    document.querySelector('#p16-header, h4').innerHTML = "Goal Achieved!";
  } else {

    document.querySelector('#p16-header, h4').innerHTML = "Goal: 2 litres a day";
  }
}

// Project 17
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('p17-movies')
const form = document.getElementById('p17-form')
const search = document.getElementById('p17-search')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})

// Project 18
const p18BackgroundSection = document.getElementById('p18');
const p18Slides = document.querySelectorAll('.p18-slide');
const p18BtnLeft = document.getElementById('p18-slider-left');
const p18BtnRight = document.getElementById('p18-slider-right');
let slideCount = 0;

p18BtnLeft.addEventListener('click', () => {

  if (slideCount == 0) {
    return;
  }
  p18Slides[slideCount].classList.remove('active')
  p18Slides[slideCount - 1].classList.add('active');
  p18SetBackgroundImg(slideCount - 1);
  slideCount--;
});

p18BtnRight.addEventListener('click', () => {

  if (slideCount == 4) {
    return;
  }
  p18Slides[slideCount].classList.remove('active');
  p18Slides[slideCount + 1].classList.add('active');
  p18SetBackgroundImg(slideCount + 1);
  slideCount++;
});
p18SetBackgroundImg(0)

function p18SetBackgroundImg(activeSlide) {

  p18BackgroundSection.style.backgroundImage = p18Slides[activeSlide].style.backgroundImage;
}

// Project 19
const p19Viewport = document.getElementById("p19");
const p19Toggle = document.getElementById("p19-toggle-btn");
const hourEl = document.querySelector('#hour')
const minuteEl = document.querySelector('#minute')
const secondEl = document.querySelector('#second')
const timeEl = document.querySelector('#p19-time')
const dateEl = document.querySelector('#p19-date')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


p19Toggle.addEventListener('click', (e) => {

  p19Toggle.classList.toggle('dark');
  p19Viewport.classList.toggle('dark');
  if (p19Toggle.classList.contains('dark')) {
    e.target.innerHTML = "Light Mode";
  } else {
    e.target.innerHTML = "Dark mode";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

  timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();

setInterval(setTime, 1000);



  


