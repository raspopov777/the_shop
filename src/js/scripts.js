
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
    }

    if (data.type === 'size') {
        changePrice();
    }
});

function changePrice() {
    //document.getElementById('priceVal').innerHTML = +new Date();
}

function changePicture(color) {
    document.getElementById('productPicture').src = 'img/tshirt_' + color + '.jpg';
}




$('#mobileMenuIcon').click(function(){
    $('#navigation').toggleClass('on');
});

