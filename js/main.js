//-------h2 colors---------

const headerTwos = document.getElementsByClassName('light-blue');
for (const header of headerTwos) {
    header.style.color = 'blue';
}
//------- bagpack section background----

document.getElementById('bags').style.backgroundColor = 'tomato';
document.getElementById('bags').style.borderRadius = '10px';
document.getElementById('bags').style.paddingTop = '1rem';
document.getElementById('bags').style.paddingBottom = '3rem';

//-------card radius-----------

const cards = document.getElementsByClassName('card');

for (const card of cards) {
    card.classList.add('border-radius');
}

const cardRadius = document.getElementsByClassName('border-radius');
for (const card of cardRadius) {
    card.style.borderRadius = '30px';
}

//--------console.log() button--------
const consoles = document.getElementsByClassName('console-btn');
for (const button of consoles) {
    button.addEventListener('click', function () {
        console.log('Buy Now from the carousel clicked');
    })
}


//---------hiding button---------

const buttons = document.getElementsByClassName('hide-btn');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

//----------email enable--------
document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
    if (event.target.value == 'email') {
        document.getElementById('submit-btn').removeAttribute('disabled');
    }
    else {
        document.getElementById('submit-btn').setAttribute('disabled', true);

    }
})

//----------emoji change--------------

document.getElementById('emoji').addEventListener('mouseenter', function (event) {
    event.target.innerHTML = '&#128536';
})
document.getElementById('emoji').addEventListener('mouseleave', function (event) {
    event.target.innerHTML = '&#128537';
})

//-------subscription bgc change---------

const subscribe = document.getElementById('subscribe');
document.getElementById('subscribe').addEventListener('dblclick', function (event) {
    if (event.target == subscribe) {
        event.target.style.backgroundColor = '#d880c9';
    }
})