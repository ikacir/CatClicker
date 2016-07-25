var catOneImage = document.getElementById('cat-one');
var catOneClickCount = 0;
catOneImage.addEventListener('click', function(){
    document.getElementById('cat-one-count').innerHTML = ++catOneClickCount;
}, false);

var catTwoImage = document.getElementById('cat-two');
var catTwoClickCount = 0;
catTwoImage.addEventListener('click', function(){
    document.getElementById('cat-two-count').innerHTML = ++catTwoClickCount;
}, false);

var names = ['Fluffy', 'Chewie'];

document.getElementById('name-one').innerHTML = names[0];
document.getElementById('name-two').innerHTML = names[1];