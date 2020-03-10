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
let time
let number = 0

increaseTime = () => {
    number++
    getTime.innerHTML = `${number}`;
}


startTimer = () => {
    time = setInterval(() => {
        increaseTime()

    }, 1000) 

}

stopTimer = () => {
    clearInterval(time)
}


getTimerButton.addEventListener('click', startTimer)
getStop.addEventListener('click', stopTimer)
