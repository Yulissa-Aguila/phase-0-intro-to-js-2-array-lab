// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const catscopy = [...cats,name]
    return catscopy;
}
function prependCat(name){
    const catscopy = [name,...cats]
    return catscopy;
}
function removeLastCat(){
    const catscopy = cats.slice(0,cats.length-1);
    return catscopy;
}
function removeFirstCat(){
    const catscopy = cats.slice(1);
    return catscopy;
}