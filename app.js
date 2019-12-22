var pop = document.getElementById('contacts');
var contbutton = $('.contact');
var closebtn = $('.close');
var sentbtn = $('.msg-btn');
var topbtn = $('.topbtn');

topbtn.hide();



contbutton.click(function() {
    pop.style.visibility = 'visible';
    pop.style.animationName = 'popanim';
})
closebtn.click(function() {
    sentbtn.hide();

    setTimeout(() => {
        pop.style.visibility = 'hidden';
    }, 100);
    setTimeout(() => {
        sentbtn.show();
    }, 101);
})

document.addEventListener('scroll', function() {
    topbtn.hide();
    setTimeout(() => {
        topbtn.show();
    }, 3000);
})

