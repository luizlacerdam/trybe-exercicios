


class Person {
    constructor(private _name: string, private _birthDate: Date) {
        this.name = _name;
        this.birthDate = _birthDate;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this.validateName(value);
        this._name = value;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    set birthDate(value: Date) {
        this.validateBirthDate(value);
        this._birthDate = value;
    }

    static getAge(value: Date): number {
        const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
    }

    private validateName(value: string): void {
        if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    private validateBirthDate(value: Date): void {
        if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
        if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
    }
}

class Student extends Person {
    private _enrollment: string;
    private _examsGrades: number[];
    private _assignmentsGrades: number[];

    constructor(name: string, birthDate: Date) {
        super(name, birthDate)
        this.enrollment = this.generateEnrollment();
    }

    get enrollment(): string {
        return this._enrollment;
    }

    set enrollment(value: string) {
        this._enrollment = value;
    }

    get examsGrades(): number[] {
        return this._examsGrades;
    }

    set examsGrades(value: number[]) {
        if (value.length > 4) {
            throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
        }

        this._examsGrades = value;
    }

    get assignmentsGrades(): number[] {
        return this._assignmentsGrades;
    }

    set assignmentsGrades(value: number[]) {
        if (value.length > 2) {
            throw new Error(
                'A pessoa estudante só pode possuir 2 notas de trabalhos.',
            );
        }

        this._assignmentsGrades = value;
    }
    sumGrades(): number {
        return [...this.examsGrades, ...this.assignmentsGrades]
            .reduce((previousNote, note) => {
                const nextNote = note + previousNote;

                return nextNote;
            }, 0);
    }

    sumAverageGrade(): number {
        const sumGrades = this.sumGrades();
        const divider = this.examsGrades.length + this.assignmentsGrades.length;

        return Math.round(sumGrades / divider);
    }
    generateEnrollment(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

        return `STU${randomStr}`;
    }
}

interface Employee {
    registration: number;
    salary: number;
    admissionDate: Date;
    generateRegistration(): string;
}


const maria = new Person('Msdds', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

console.log(maria);
console.log(luiza);