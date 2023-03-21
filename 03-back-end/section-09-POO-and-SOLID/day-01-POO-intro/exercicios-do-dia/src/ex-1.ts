class Estudante {
    matricula: number;
    nome: string;
    provas: number[];
    trabalhos: number[];

    constructor(m: number, n: string, p: number[], t: number[]) {
        console.log(`Criando estudante ${n}`);
        this.matricula = m;
        this.nome = n;
        this.provas = p;
        this.trabalhos = t;
    }

    soma() {
        const sum = this.provas.reduce((pS, a) => pS + a, 0)
        return sum;
    }

    media() {
        const media = this.soma() / this.provas.length;
        return media;
    }
}

const est1 = new Estudante(123, 'Luiz', [10, 9, 8, 8], [10, 8]);

console.log(est1.soma());
console.log(est1.media());

