function makeCounter (number) {
    let currentCount = 0;
    return function (number) {
        return currentCount+=number;
    };
}
let sum = makeCounter();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));