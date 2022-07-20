const a = 100;
const b = 200;
const c = 300;

if (a > b && a > c) {
    return a;
} else if (b > a && b > c) {
    return b;
} else {
    return c;
}