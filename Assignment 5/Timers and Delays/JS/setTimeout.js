// A setTimeout calls a function after a specified time of milliseconds
setTimeout(()=>{
    console.log('Display me after the specified time')
}, 10000);// This will display the message after 10seconds.....


//Alternatively we can call this like this 
setTimeout(Answer, 3000);

function Answer(){
    console.log('The answer is beyond the Devil');
};

//And also like this

setTimeout(Score, 2000, 'Man utd 0:2 Chelsea');

function Score(x){
    console.log(x);
};