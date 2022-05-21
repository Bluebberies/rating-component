const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const button = document.getElementById("btn");
const container2 = document.getElementById("cont-2");
const container1 = document.getElementById("cont-1");
const rate = document.getElementById("rating");

let a;
let b;
let c;
let d;
let f;

button.addEventListener("click", (e => {
    e.preventDefault();

    showCase()
}))

one.addEventListener("click", (e => {
    e.preventDefault();

    a = 1;
}))

two.addEventListener("click", (e => {
    e.preventDefault();

    b = 1;
}))

three.addEventListener("click", (e => {
    e.preventDefault();

    c = 1;
}))

four.addEventListener("click", (e => {
    e.preventDefault();

    d = 1;
}))

five.addEventListener("click", (e => {
    e.preventDefault();

    f = 1;
}))


function showCase(){
    if(a === 1){
        rate.innerHTML = one.innerHTML;
        container1.style.display = "none";
        container2.style.display = "block";
    }

    if(b === 1){
        rate.innerHTML = two.innerHTML;
        container1.style.display = "none";
        container2.style.display = "block";
    }

    if(c === 1){
        rate.innerHTML = three.innerHTML;
        container1.style.display = "none";
        container2.style.display = "block";
    }

    if(d === 1){
        rate.innerHTML = four.innerHTML;
        container1.style.display = "none";
        container2.style.display = "block";
    }

    if(f === 1){
        rate.innerHTML = five.innerHTML;
        container1.style.display = "none";
        container2.style.display = "block";
    }
} 
