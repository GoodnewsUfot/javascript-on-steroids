//Challenge 1: Your Age is Days
function ageinDays() {
    var birthyear = prompt('What year were you born?'); 
    var ageinDayss = (2022 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageinDayss + ' days' + ' old');
    h1.setAttribute('id', 'ageinDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageinDays').remove();
}

//Challenge 2: Cat Generator
function generatecat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src= "C:/Users/User/Pictures/Goodnews.jpg";
    div.appendChild(image);
}