let partOne;
let partTwo;
let partThree;

let firstNumber = Math.floor(Math.random()*4);


if (firstNumber === 0){
    partOne = 'you are going to be the best version of yourself.';
}else if (firstNumber === 1){
    partOne = 'nothing can stop you.';
}else if (firstNumber === 2){
    partOne = 'you make the choice to live an extraordinary life.';
}else {
    partOne = 'you are going to define your own life.';
}

let secondNumber = Math.floor(Math.random()*4);


if (secondNumber === 0){
    partTwo = 'other people are not comfortable with your choices.';
}else if (secondNumber === 1){
    partTwo = 'you are getting your ass kicked.';
}else if (secondNumber === 2){
    partTwo = "you don't feel prepared for it.";
}else {
    partTwo = 'people tell you otherwise.';
}

let thirdNumber = Math.floor(Math.random()*4);


if (thirdNumber === 0){
    partThree = 'the most important thing is that you believe in yourself.';
}else if (thirdNumber === 1){
    partThree = 'you can change the world.';
}else if (thirdNumber === 2){
    partThree = 'you determine your own path.';
}else {
    partThree = 'you are never too old to set another goal or to dream a new dream.';
}

console.log(`Today, ${partOne} Even if ${partTwo} Because ${partThree}`);
