// Windows Location
// The window.location can be used to get the current page address(url) and redirect the browser to a new page. 



document.querySelector("#location").addEventListener('click', ()=>{
    window.location.href = "https://medium.com/";
});

console.log(window.location);