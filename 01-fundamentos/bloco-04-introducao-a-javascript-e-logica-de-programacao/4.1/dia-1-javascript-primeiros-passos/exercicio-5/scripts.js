const a = 90;
const b = 45;
const c = 45;

if (a < 0 || b < 0 || c < 0) {
    return 'triangulo invalido';
} else if (a + b + c == 180) {
    return true;
} else {
    return false;
}