const btn = document.querySelector('button');
const img = document.querySelector('img');
const heads = document.querySelector('.heads');
const tail = document.querySelector('.tail');

btn.addEventListener('click', show, false);

const res = {
    tail: 0,
    heads: 0
}

function show () {



    const isHeads = Math.random() >= 0.5;
    
    if (isHeads) {
    
        img.setAttribute('src', './img/head.jpg');
        res.heads += 1;
        heads.textContent =  res.heads;

    } else {

        img.setAttribute('src', './img/tail.jpg');
        res.tail += 1;
        tail.textContent =  res.tail;

    }



}