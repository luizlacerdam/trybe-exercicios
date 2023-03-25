


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
        this._enrollment = this.generateEnrollment();
        this._examsGrades = [];
        this._assignmentsGrades = [];
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
    registration: string;
    salary: number;
    admissionDate: Date;
    generateRegistration(): string;
}

class Subject {
    constructor(private _name: string) {
        this.name = _name; // necessário para usar a validação
    }

    get name() {
        return this._name;
    }

    set name(v: string) {
        this.validationName(v)
        this._name = v;
    }

    private validationName(v: string): void {
        if (v.length < 3) throw new Error('O nome tem que possuir no mínimo 3 caracteres.');
    }

}

const math = new Subject('Ma');
const story = new Subject('História');
const philosophy = new Subject('Filosofia');

//console.log(math);
console.log(story.name);
console.log(philosophy);

class Teacher extends Person implements Employee {
    private _subject: Subject;
    private _registration = String();
    private _admissionDate: Date;

    constructor(name: string, birthDate: Date, private _salary: number, subject: Subject) {
        super(name, birthDate);

        this._subject = subject;
        this.salary = _salary;
        this._admissionDate = new Date();
        this.registration = this.generateRegistration();
    }

    get subject(): Subject {
        return this._subject;
    }

    set subject(value: Subject) {
        this._subject = value;
    }

    get registration(): string {
        return this._registration;
    }

    set registration(value: string) {
        if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');

        this._registration = value;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        if (value < 0) throw new Error('O salário não pode ser negativo.');

        this._salary = value;
    }

    get admissionDate(): Date {
        return this._admissionDate;
    }

    set admissionDate(value: Date) {
        if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

        this._admissionDate = value;
    }

    generateRegistration(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

        return `PRF${randomStr}`;
    }
}

// const maria = new Person('Msdds', new Date('1980/01/25'));
// const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

// console.log(maria);
// console.log(luiza);

