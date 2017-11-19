
class PropertySelector {
    constructor(el) {
        this.el = el;

        this.el.addEventListener('click', ev => {
            const type = ev.target.dataset['type'];
            const value = ev.target.dataset['value'];
            this.dispatchEvent(type, value);
        });
    }

    dispatchEvent(type, value) {
        const event = new CustomEvent('property-selected', {
            detail: {
                type: type,
                value: value
            }
        });
        // Pub/Sub
        Dispatcher.dispatchEvent(event);
    }
}

const Dispatcher = document.getElementById('buy-form');

new PropertySelector(document.getElementById('colorList'));
new PropertySelector(document.getElementById('sizeList'));

Dispatcher.addEventListener('property-selected', ev => {
    const data = ev.detail;

    if (data.type === 'color') {
        changePicture(data.value);
        localStorage.setItem(data.type, data.value);
    }

    if (data.type === 'size') {
        changePrice();
        localStorage.setItem(data.type, data.value);
    }
});

function changePrice() {
    //document.getElementById('priceVal').innerHTML = +new Date();
}

function changePicture(color) {
    document.getElementById('productPicture').src = 'img/tshirt_' + color + '.jpg';
}

function presets (type) {
    const colorValue = localStorage.getItem(type);
    if(colorValue){
        const els = document.getElementById(type+'List').querySelectorAll('input');
        els.forEach(function (el) {
            if(el.dataset['value'] === colorValue){
                el.checked = true;
                if(el.dataset['type']=== 'color')
                    changePicture(colorValue);
            }
        });
    }
}

presets('color');
presets('size');

$('#mobileMenuIcon').click(function(){
    $('#navigation').toggleClass('on');
});

