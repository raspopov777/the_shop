//...
const colorCatalog = [
    { key: 'white', src: 'img/tshirt_white.jpg' },
    { key: 'yellow', src: 'img/tshirt_yellow.jpg' },
    { key: 'green', src: 'img/tshirt_green.jpg' }
];

document.addEventListener('click',function (event) {
    const el = event.target;
    if (el.hasAttribute('data-color-value')) {
        const colorV = el.getAttribute('data-color-value');
        let i = colorCatalog.length;
        while (i--) {
            if (colorV === colorCatalog[i].key) {
                document.getElementById('big').src = colorCatalog[i].src;
            }
        }
    }
});

$('#mobileMenuIcon').click(function(){
    $('#navigation').toggleClass('on');
});

