/*eslint-disable */
function color(c){switch(c){
        case 'white': {
            document.getElementById('big').src = 'img/tshirt_white.jpg';
            document.getElementById('color_w').classList.add('active');
            document.getElementById('color_g').classList.remove('active');
            document.getElementById('color_y').classList.remove('active');
            break;
        }
        case 'yellow': {
            document.getElementById('big').src = 'img/tshirt_yellow.jpg';
            document.getElementById('color_y').classList.add('active');
            document.getElementById('color_g').classList.remove('active');
            document.getElementById('color_w').classList.remove('active');
            break;
        }
        case 'green': {
            document.getElementById('big').src = 'img/tshirt_green.jpg';
            document.getElementById('color_g').classList.add('active');
            document.getElementById('color_w').classList.remove('active');
            document.getElementById('color_y').classList.remove('active');
            break;
        }
    }
}

function size(c){
    switch(c){
        case 'S': {
            document.getElementById('size-s').classList.add('active');
            document.getElementById('size-m').classList.remove('active');
            document.getElementById('size-l').classList.remove('active');
            break;

        }
        case 'M': {
            document.getElementById('size-m').classList.add('active');
            document.getElementById('size-s').classList.remove('active');
            document.getElementById('size-l').classList.remove('active');
            break;
        }
        case 'L': {
            document.getElementById('size-l').classList.add('active');
            document.getElementById('size-s').classList.remove('active');
            document.getElementById('size-m').classList.remove('active');
            break;
        }
    }
}
