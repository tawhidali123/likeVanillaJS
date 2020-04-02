const getBody = document.querySelector('.recievedBox');
const getLike = document.querySelector('.like');
const getLikeNum = document.querySelector('.likeNum');

const getTimerButton = document.querySelector('.timerButton');
const getTime = document.querySelector('.time');
const getStop = document.querySelector('.stopButton');

const getImage = document.querySelector('.imageSection');


// Like Button 
let like = 0;

increaseLike = () => {
    like ++
    getLikeNum.classList.add('liked')
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

// ////////////////////////////////////////////////////////////

// On click transformation
turnImage = () => {
    getImage.classList.add('.turn')
    console.log('clicked')

}

getImage.addEventListener('click', turnImage)

