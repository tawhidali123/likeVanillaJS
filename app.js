const getBody = document.querySelector('.recievedBox');
const getLike = document.querySelector('.like');
const getLikeNum = document.querySelector('.likeNum');
const getTimerButton = document.querySelector('.timerButton');
const getTime = document.querySelector('.time');
const getStop = document.querySelector('.stopButton');


// Like Button 
let like = 0;

increaseLike = () => {
    like ++
    getLikeNum.innerHTML = `${like}`
}

likeClick = () => {
    increaseLike()
    
}

getLike.addEventListener(('click'), likeClick)

// //////////////////////////////////////////////////////////////////

// Timer
let time = 0;


startTimer = () => {
    let startCount = setInterval(() => {
        time ++;
        getTime.innerHTML = `${time}`;
    }, 1000) 
}

stopTimer = () => {
    clearInterval(startCount)
}

timerClick = () => {
    startTimer()
}

getTimerButton.addEventListener('click', timerClick)
getStop.addEventListener('click', stopTimer)
