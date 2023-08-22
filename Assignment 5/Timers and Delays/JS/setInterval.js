//According to my research, this similar to setTimeout, but the only difference is that the information continues to display at intervals,
// until its either cleared or window is closed

let counter = 0;
setInterval(count, 6000);

function count(){
    console.log('this for setInterval ' +  counter++ );
};