let peca = 'bispo';
lowerPeca = peca.toLowerCase()

switch (lowerPeca) {
    case 'peao':
        return 'casa pra frente';
    case 'cavalo':
        return 'movimenta-se em L';
    case 'torre':
        return 'movimenta-se em linha reta';
    case 'dama':
        return 'movimenta-se em qualquer direção';
    case 'rei':
        return 'movimenta-se em qualquer direção uma casa';
    case 'bispo':
        return 'diagonais'; 
}
