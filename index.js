var catOneImage = document.getElementById('cat-one');

var catOneClickCount = 0;

catOneImage.addEventListener('click', function(){
    document.getElementById('cat-one-count').innerHTML = ++catOneClickCount;
}, false);

var names = ['Fluffy', 'Chewie'];

document.getElementById('name-one').innerHTML = names[0];
document.getElementById('name-two').innerHTML = names[1];