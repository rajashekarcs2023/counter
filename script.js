let count = 10;
let movies = ["DDLJ","12 Angry men","KGF","Matrix"];

let countEl = document.getElementById("count");
let addBtnEl = document.getElementById("add__btn");
let subBtnEl = document.getElementById("sub__btn");

const incrementCount = () => {
    count++;
    countEl.innerHTML = count;

};

function decrementCount(){
    count--;
    countEl.innerHTML = count;
};


const displayMovies = () => {};

document.addEventListener("DOMContentLoaded",() => {
    countEl.innerHTML = count;
    displayMovies();
});

addBtnEl.addEventListener("click",incrementCount);
subBtnEl.addEventListener("click",decrementCount);