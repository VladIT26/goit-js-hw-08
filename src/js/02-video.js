import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEO_CURRENT_TIME = "videoplayer-current-time";


const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);


function onPlay(event) {
localStorage.setItem(VIDEO_CURRENT_TIME, JSON.stringify(event))
};

player.on('timeupdate', throttle(onPlay, 1000))

function playerRestart() {
    const savedTime = localStorage.getItem(VIDEO_CURRENT_TIME)
    const parsedTime = JSON.parse(savedTime)
    if (savedTime) {
        player.setCurrentTime(parsedTime.seconds).then(value => {
        console.log(value);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
    }
}
playerRestart()