// query selector variables go here 👇
let posterImage                 = document.querySelector('.poster-img');
let posterTitle                 = document.querySelector('.poster-title');
let posterQuote                 = document.querySelector('.poster-quote');
let showRandomButton            = document.querySelector('.show-random');
let showForm                    = document.querySelector('.show-form');
let mainPoster                  = document.querySelector('.main-poster');
let posterForm                  = document.querySelector('.poster-form');
let showSavedButton             = document.querySelector('.show-saved');
let savedPosters                = document.querySelector('.saved-posters');
let savePosterButton            = document.querySelector('.save-poster');
let showMainButton              = document.querySelector('.show-main');
let backToMainButton            = document.querySelector('.back-to-main');
let makePosterButton            = document.querySelector('.make-poster');
let posterImageUrl              = document.querySelector('#poster-image-url');
let posterTitleInput            = document.querySelector('#poster-title');
let posterQuoteInput            = document.querySelector('#poster-quote');
let savedPostersGrid            = document.querySelector('.saved-posters-grid');
let showUnmotivatedPosterButton = document.querySelector('.show-unmotivational');
let unmotivationalPosters       = document.querySelector('.unmotivational-posters');
let backToMainButtonUnmotivated = document.querySelector('.unmotivational-posters .back-to-main');
let unmotivationalPostersGrid   = document.querySelector('.unmotivational-posters-grid')
// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

let unmotivationalPostersArray = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url:  "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url:  "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url:  "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
];
var savedPostersArray = [];
var currentPoster;

// event listeners go here 👇
window.addEventListener("load", changeImg);
showRandomButton.addEventListener("click", changeImg);
showForm.addEventListener("click", makeForm);
showSavedButton.addEventListener("click", showSavedPosters);
showMainButton.addEventListener("click", showMainScreen);
backToMainButton.addEventListener("click", showMainScreen);
makePosterButton.addEventListener("click", displayCustomPoster);
savePosterButton.addEventListener("click", savePoster);
// showUnmotivatedPosterButton.addEventListener("click", showUnmotivatedPosters(cleanData()))
showUnmotivatedPosterButton.addEventListener("click", showUnmotivatedPosters)
backToMainButtonUnmotivated.addEventListener("click", function(){
  showMainPage(unmotivationalPosters);
})
doubleCickDelete.addEventListener("dblclick", deletePoster);

// functions and event handlers go here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
} 

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(),
    imageURL: imageURL,
    title: title,
    quote: quote
  };
}

function changeImg() {
  let randomImg         = images[getRandomIndex(images)];
  let randomQuote       = quotes[getRandomIndex(quotes)];
  let randomTitle       = titles[getRandomIndex(titles)];

  let randomPoster      = createPoster(randomImg, randomTitle, randomQuote);

  posterImage.src       = randomPoster.imageURL;
  posterTitle.innerText = randomPoster.title;
  posterQuote.innerText = randomPoster.quote;

  currentPoster = randomPoster;  // Update the current poster to be the random one displayed
}

function makeForm() {
  mainPoster.classList.add("hidden");
  posterForm.classList.remove("hidden");
}

function showSavedPosters() {
  mainPoster.classList.add("hidden"); // Hide the main poster section
  savedPosters.classList.remove("hidden"); // Show the saved posters section
  
  savedPostersGrid.innerHTML = "";

  savedPostersArray.forEach(poster => {
    let savedPosterArticle = document.createElement('article'); // Create a new article element
    
    savedPosterArticle.classList.add("mini-poster"); // Assign a class for styling
    
    savedPosterArticle.innerHTML = `
      <img src="${poster.imageURL}" class="poster-img" alt="${poster.title}">
      <h1 class="poster-title">${poster.title}</h1>
      <h3 class="poster-quote">${poster.quote}</h3>
    `;
    savedPostersGrid.appendChild(savedPosterArticle)
  });
}


function showMainPage(page) {
  page.classList.add("hidden");
  mainPoster.classList.remove("hidden")
}

function showMainScreen() {
  posterForm.classList.add("hidden");
  savedPosters.classList.add("hidden");
  mainPoster.classList.remove("hidden");
}

function displayCustomPoster() {
  event.preventDefault();

  let customImg         = posterImageUrl.value;
  let customTitle       = posterTitleInput.value;
  let customQuote       = posterQuoteInput.value;

  let customPoster      = createPoster(customImg, customTitle, customQuote);

  posterImage.src       = customPoster.imageURL;
  posterImage.alt       = customPoster.title;
  posterTitle.innerText = customPoster.title;
  posterQuote.innerText = customPoster.quote;

  currentPoster        = customPoster; // Set current poster to the custom one

  posterForm.classList.add("hidden");
  mainPoster.classList.remove("hidden");

}
function savePoster() {
  if (savedPostersArray.some(poster => poster.imageURL === currentPoster.imageURL)) {
    return;  // Do not save duplicate posters
  } else {
    savedPostersArray.push(currentPoster); 
  }
  alert("Saved!")
}

function cleanData() {
  return unmotivationalPostersArray.map(poster => {
    return createPoster(poster.img_url, poster.name, poster.description)    
  })
}

// function showUnmotivatedPosters(data) {
//   mainPoster.classList.add("hidden");
//   unmotivationalPosters.classList.remove("hidden");  

//   data.forEach(poster => {
  function showUnmotivatedPosters() {
      mainPoster.classList.add("hidden");
      unmotivationalPosters.classList.remove("hidden");  
    
      cleanData().forEach(poster => {
    let unmotivationalArticle = document.createElement('article'); // Create a new article element
    
    unmotivationalArticle.classList.add("mini-poster"); // Assign a class for styling
    
    unmotivationalArticle.innerHTML = `
      <img src="${poster.imageURL}" class="poster-img" alt="${poster.title}">
      <h1 class="poster-title">${poster.title}</h1>
      <h3 class="poster-quote">${poster.quote}</h3>
    `;
    unmotivationalPostersGrid.appendChild(unmotivationalArticle)
  }); 
}

function hideCurrentSection() {
  // Get the current page path
  var currentPath = window.location.pathname;

  // Find the section corresponding to the current path
  var sectionToHide = document.querySelector(`section[data-page="${currentPath}"]`);

  // If a matching section is found, add the hidden attribute
  if (sectionToHide) {
    sectionToHide.setAttribute('hidden', true);
  }
}

function deletePoster(posterId){
  let remainingPosters = cleanData().filter(poster => {
    poster.id !== posterId  
  })    
  showUnmotivatedPosters(remainingPosters)
}