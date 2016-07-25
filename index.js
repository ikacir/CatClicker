var cats = [
    {
        name: 'Fluffy',
        clickCount: 0,
        image: 'fluffy.jpg'
    },
    {
        name: 'Chewie',
        clickCount: 0,
        image: 'chewie.jpg'
    },
    {
        name: 'Foofy',
        clickCount: 0,
        image: 'foofy.jpg'
    },
    {
        name: 'Jetske',
        clickCount: 0,
        image: 'jetske.jpg'
    },
    {
        name: 'Yawnee',
        clickCount: 0,
        image: 'yawnee.jpg'
    }
];

for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];

    var nameListNode = document.createElement('li');
    nameListNode.textContent = cat.name;

    nameListNode.addEventListener('click', (function(catCopy) {
        return function() {
            var content = document.getElementById('content');
            content.innerHTML  = '<h2>' + catCopy.name + '</h2>';
            content.innerHTML += '<img src="' + catCopy.image + '" id="'
                               + catCopy.image + '">';
            content.innerHTML += '<br>Click count: <span id="' 
                               + catCopy.name +'">' + catCopy.clickCount
                               + '</span>';

            
            document.getElementById(catCopy.image).addEventListener('click',
            function(){
                document.getElementById(catCopy.name).innerHTML = 
                    ++catCopy.clickCount;
            }, false);
        };
    })(cat));

    document.getElementById('name-list').appendChild(nameListNode);

}