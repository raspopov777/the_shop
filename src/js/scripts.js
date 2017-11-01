
document.addEventListener('click',function (event) {
    if(event.target.classList.contains('rectangle_white')){
        document.getElementById('big').src = 'img/tshirt_white.jpg';
    }
    if(event.target.classList.contains('rectangle_yellow')){
        document.getElementById('big').src = 'img/tshirt_yellow.jpg';
    }
    if(event.target.classList.contains('rectangle_green')){
        document.getElementById('big').src = 'img/tshirt_green.jpg';
    }
});
