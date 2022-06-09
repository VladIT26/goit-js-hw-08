import Vimeo from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
console.log(iframe)
const player = new Vimeo(iframe);


const onPlay = function (data) {
duration: 61.857
percent: 0.049
seconds: 3.034
};

player.on('timeupdate', onPlay)
console.log(onPlay)