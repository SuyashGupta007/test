let n = 100
let r = 2
let c = n - r;
let answer = 1;
for (let i = n; i > c; i--) {
    answer *= i;
}
for (let i = r; r > 1; i--) {
    answer /= i;
}
console.log(answer);

