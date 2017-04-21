alert('Welcome to Git !');

console.log('We are on a new branch!');

var firstName = 'Kyle';
var lastName = 'Montierth';
var age = '29';

console.log('Full Name: ' + firstName + ' ' + lastName);

if(age > 19)
    console.log('Not a teen. ');
else
    console.log('We are a teen. We hate our parents. ');

var carButton = document.getElementById('get-car');

carButton.addEventListener('click', function() {
    // I need to find the input off the page
    var carInput = document.getElementById('car');
    // I need to console log the input value
    
    console.log(carInput.value);
    
});