const name = "Rishat";

console.log(name);

const namefn=(name)=>{
    console.log('Hello, ${name}');
}
namefn('Rishat');
namefn('Babui');


setTimeout(() => {
    console.log('int the timeout')
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('in the inerval');
}, 1000);

console.log(__dirname);
console.log(__filename);

console.log(document.querySelector);