const btn = document.querySelector('button');
const imgToss = document.querySelector('.toss');
const imgDices = document.querySelector('.dices');
const td = document.querySelectorAll('td');
// const tail = document.querySelector('.tail');

btn.addEventListener('click', show, false);

const res = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
}

function show () {

    const toss = Math.floor(Math.random() * 6 + 1);
    console.log(toss);
    
    switch (toss) {
        case 1: 
            res["1"] += 1;
            td[0].textContent = res["1"];
            imgDices.setAttribute('src', './img/1.jpg');
            break;
        case 2: 
            res["2"] += 1;
            td[1].textContent = res["2"];
            imgDices.setAttribute('src', './img/2.jpg');
            break;
        case 3: 
            res["3"] += 1;
            td[2].textContent = res["3"];
            imgDices.setAttribute('src', './img/3.jpg');
            break;
        case 4: 
            res["4"] += 1;
            td[3].textContent = res["4"];
            imgDices.setAttribute('src', './img/4.jpg');
            break;
        case 5: 
            res["5"] += 1;
            td[4].textContent = res["5"];
            imgDices.setAttribute('src', './img/5.jpg');
            break;
        case 6: 
            res["6"] += 1;
            td[5].textContent = res["6"];
            imgDices.setAttribute('src', './img/6.jpg');
            break;  
        default:
         console.log('Error: toss out a range')          
    }


}