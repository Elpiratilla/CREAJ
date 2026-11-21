if (sessionStorage.getItem('bluesGameAccess') !== 'true') {
  window.location.replace('index.html');
}

const songList = [
  // Canciones tomadas de las playlists reales de Blue's.
  { title: 'September', artist: 'Earth, Wind & Fire', category: 'Alegre', spotifyId: '2grjqo0Frpf2okIBiifQKs' },
  { title: 'Uptown Funk', artist: 'Mark Ronson, Bruno Mars', category: 'Alegre', spotifyId: '32OlwWuMpZ6b0aN2RZOeMS' },
  { title: 'Coffee', artist: 'beabadoobee', category: 'Amor', spotifyId: '429NtPmr12aypzFH3FkN9l' },
  { title: 'All of Me', artist: 'John Legend', category: 'Amor', spotifyId: '3U4isOIWM3VvDubwSI3y7a' },
  { title: 'ocean eyes', artist: 'Billie Eilish', category: 'Ansioso', spotifyId: '2uIX8YMNjGMD7441kqyyNU' },
  { title: 'Clocks', artist: 'Coldplay', category: 'Ansioso', spotifyId: '0BCPKOYdS2jbQ8iyB56Zns' },
  { title: 'Someone Like You', artist: 'Adele', category: 'Triste', spotifyId: '1zwMYTA5nlNjZxYrvBB2pV' },
  { title: 'The Scientist', artist: 'Coldplay', category: 'Triste', spotifyId: '75JFxkI2RXiU7L9VXzMkle' },
  { title: 'Weightless', artist: 'Marconi Union', category: 'Ansioso', spotifyId: '6kkwzB6hXLIONkEk9JciA6' },
  { title: 'Nuvole Bianche', artist: 'Ludovico Einaudi', category: 'Tranquilo', spotifyId: '3weNRklVDqb4Rr5MhKBR3D' },
  { title: 'On the Nature of Daylight', artist: 'Max Richter', category: 'Tranquilo', spotifyId: '56oReVXIfUO9xkX7pHmEU0' }
];

const emotions = ['Tranquilo', 'Alegre', 'Ansioso', 'Triste', 'Amor'];
const roundDuration = 30;
let currentSong = null;
let timerId = null;
let remainingSeconds = roundDuration;
const score = { correct: 0 };
let mistakes = 0;
let gameEnded = false;

const timerElement = document.querySelector('#timer');
const spotifyPlayer = document.querySelector('#spotify-player');
const answersContainer = document.querySelector('#answers');
const resultMessage = document.querySelector('#result-message');
const nextButton = document.querySelector('#next-button');
const correctScore = document.querySelector('#correct-score');
const mistakeScore = document.querySelector('#mistake-score');
const victoryOverlay = document.querySelector('#victory-overlay');
const failureOverlay = document.querySelector('#failure-overlay');
const confettiContainer = document.querySelector('#confetti-container');
const prizeImage = document.querySelector('#prize-image');
const failureImage = document.querySelector('#failure-image');
const victoryRestart = document.querySelector('#victory-restart');
const failureRestart = document.querySelector('#failure-restart');
const introScreen = document.querySelector('#intro-screen');
const gameView = document.querySelector('#game-view');
const startGameButton = document.querySelector('#start-game');
const introCarousel = document.querySelector('#intro-carousel');
const introCarouselImages = Array.from(document.querySelectorAll('#intro-carousel .intro-carousel-image'));
const failureSound = new Audio('../sounds/fallo.mp3');
failureSound.volume = 0.7;

function leaveGame() {
  sessionStorage.removeItem('bluesGameAccess');
}

function isEnglishGame() {
  return document.documentElement.lang === 'en' || localStorage.getItem('bluesLanguage') === 'en';
}

function gameMessage(spanish, english) {
  return isEnglishGame() ? english : spanish;
}

function updateScoreboard() {
  correctScore.textContent = score.correct;
  mistakeScore.textContent = mistakes;
}

function updateTimer() {
  timerElement.textContent = remainingSeconds;
  timerElement.closest('.timer-label').classList.toggle('is-danger', remainingSeconds <= 3);
}

function stopTimer() {
  window.clearInterval(timerId);
  timerId = null;
}

function finishRound(message, resultClass) {
  if (gameEnded) return;
  stopTimer();
  Array.from(answersContainer.querySelectorAll('button')).forEach(button => {
    button.disabled = true;
    if (button.dataset.emotion === currentSong.category) {
      button.classList.add('correct');
    }
  });
  resultMessage.textContent = message;
  resultMessage.className = `result-message ${resultClass}`;
}

function showVictory() {
  gameEnded = true;
  stopTimer();
  gameView.hidden = true;
  createConfetti();
  victoryOverlay.hidden = false;
}

function showFailure() {
  gameEnded = true;
  stopTimer();
  gameView.hidden = true;
  failureOverlay.hidden = false;
  failureSound.currentTime = 0;
  failureSound.play().catch(() => {});
}

function createConfetti() {
  confettiContainer.innerHTML = '';
  const colors = ['#e8dcc8', '#7d93d1', '#78b39b', '#d9827b', '#3d54a0'];

  for (let index = 0; index < 42; index += 1) {
    const piece = document.createElement('span');
    piece.className = `confetti-piece ${index % 2 === 0 ? 'left' : 'right'}`;
    piece.style.setProperty('--confetti-color', colors[index % colors.length]);
    piece.style.setProperty('--confetti-delay', `${(index % 9) * 0.08}s`);
    piece.style.setProperty('--confetti-x', `${index % 2 === 0 ? 60 + Math.random() * 42 : -60 - Math.random() * 42}vw`);
    piece.style.setProperty('--confetti-y', `${-25 - Math.random() * 70}vh`);
    piece.style.setProperty('--confetti-rotation', `${Math.random() * 180 - 90}deg`);
    piece.style.setProperty('--confetti-end-rotation', `${Math.random() * 720 - 360}deg`);
    confettiContainer.appendChild(piece);
  }
}

function returnToIntro() {
  gameEnded = false;
  stopTimer();
  mistakes = 0;
  score.correct = 0;
  spotifyPlayer.src = 'about:blank';
  victoryOverlay.hidden = true;
  failureOverlay.hidden = true;
  gameView.hidden = true;
  introScreen.hidden = false;
  updateScoreboard();
}

function beginGame() {
  introScreen.hidden = true;
  gameView.hidden = false;
  startRound();
}

function handleAnswer(selectedEmotion, selectedButton) {
  if (gameEnded || !currentSong || selectedButton.disabled) return;

  const isCorrect = selectedEmotion === currentSong.category;
  selectedButton.classList.add(isCorrect ? 'correct' : 'incorrect');

  if (isCorrect) {
    score.correct += 1;
    updateScoreboard();
    finishRound(gameMessage(`¡Acertaste! "${currentSong.title}" representa la emoción ${currentSong.category}.`, `Correct! "${currentSong.title}" represents the emotion ${currentSong.category}.`), 'success');
    if (score.correct >= 3) window.setTimeout(showVictory, 650);
  } else {
    mistakes += 1;
    updateScoreboard();
    finishRound(gameMessage(`No era esa. "${currentSong.title}" pertenece a la emoción ${currentSong.category}.`, `Not quite. "${currentSong.title}" belongs to the ${currentSong.category} emotion.`), 'error');
    if (mistakes >= 3) window.setTimeout(showFailure, 650);
  }
}

function renderAnswers() {
  answersContainer.innerHTML = '';
  emotions.forEach(emotion => {
    const answerButton = document.createElement('button');
    answerButton.type = 'button';
    answerButton.className = 'answer-button';
    answerButton.dataset.emotion = emotion;
    answerButton.textContent = emotion;
    answerButton.addEventListener('click', () => handleAnswer(emotion, answerButton));
    answersContainer.appendChild(answerButton);
  });
}

function startTimer() {
  stopTimer();
  remainingSeconds = roundDuration;
  updateTimer();
  timerId = window.setInterval(() => {
    remainingSeconds -= 1;
    updateTimer();

    if (remainingSeconds <= 0) {
      mistakes += 1;
      updateScoreboard();
      finishRound(gameMessage(`Se acabó el tiempo. "${currentSong.title}" pertenece a ${currentSong.category}.`, `Time is up. "${currentSong.title}" belongs to the ${currentSong.category} emotion.`), 'error');
      if (mistakes >= 3) window.setTimeout(showFailure, 650);
    }
  }, 1000);
}

function startIntroCarousel() {
  if (introCarouselImages.length < 2) return;
  let introCarouselIndex = 0;
  window.setInterval(() => {
    introCarouselImages[introCarouselIndex].classList.remove('is-active');
    introCarouselIndex = (introCarouselIndex + 1) % introCarouselImages.length;
    introCarouselImages[introCarouselIndex].classList.add('is-active');
  }, 6000);
}

function startRound() {
  if (gameEnded) return;
  currentSong = songList[Math.floor(Math.random() * songList.length)];
  spotifyPlayer.src = `https://open.spotify.com/embed/track/${currentSong.spotifyId}?utm_source=generator&theme=0`;
  resultMessage.textContent = '';
  resultMessage.className = 'result-message';
  renderAnswers();
  startTimer();
}

nextButton.addEventListener('click', startRound);
startGameButton.addEventListener('click', beginGame);
victoryRestart.addEventListener('click', returnToIntro);
failureRestart.addEventListener('click', returnToIntro);
document.querySelectorAll('a[href*="index.html"]').forEach(link => {
  link.addEventListener('click', leaveGame);
});
prizeImage.addEventListener('error', () => prizeImage.classList.add('is-missing'));
failureImage.addEventListener('error', () => failureImage.classList.add('is-missing'));
introCarouselImages.forEach(image => {
  image.addEventListener('error', () => {
    image.classList.add('is-missing');
    if (introCarouselImages.every(carouselImage => carouselImage.classList.contains('is-missing'))) {
      introCarousel.classList.add('is-missing');
    }
  });
});
startIntroCarousel();
updateScoreboard();