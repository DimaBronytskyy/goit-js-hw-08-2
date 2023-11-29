import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const localStorageKey = 'videoplayer-current-time';
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(localStorageKey, data.seconds);
  }, 1000)
);

const savedCurrentTime = localStorage.getItem(localStorageKey) || null;
player.setCurrentTime(savedCurrentTime);

console.log(Player);