const getBody = document.querySelector('.recievedBox');
const getLike = document.querySelector('.like');
const getLikeNum = document.querySelector('.likeNum');
const getTimerButton = document.querySelector('.timerButton');
const getTime = document.querySelector('.time');


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



