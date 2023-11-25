import Vimeo from '@vimeo/player';
import throttle from 'https://cdn.skypack.dev/lodash.throttle';

const player = new Player(document.getElementById('vimeo-player'));
const storageKey = 'videoplayer-current-time';

player.on('loaded', () => {
  const storedTime = localStorage.getItem(storageKey);
  if (storedTime) {
    player.setCurrentTime(parseFloat(storedTime));
  }
  player.on('timeupdate', throttle(handleTimeUpdate, 1000));
});

function handleTimeUpdate(event) {
  const currentTime = event.seconds;

  localStorage.setItem(storageKey, currentTime);
}