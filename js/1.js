let div = document.querySelector('.nav')
window.addEventListener('scroll', function () {
    let lg = document.documentElement.scrollTop;
    if (lg <= 600) {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
});
