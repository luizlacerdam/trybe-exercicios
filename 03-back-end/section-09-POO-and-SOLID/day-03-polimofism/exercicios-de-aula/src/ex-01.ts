abstract class Character {
    abstract talk(): void
    abstract specialMove(): void
    static characterPresentation(char: Character): void {
        char.talk();
        char.specialMove();
    };
}

class MeleeCharacter extends Character {
    constructor(private _n: string, private _sMoviment: string) {
        super();
    }
    talk(): void {
        console.log(`${this._n} is melee and is talking.`);
    }
    specialMove(): void {
        console.log(`${this._n} used ${this._sMoviment}`);
    }
}

class LongRangeCharacter extends Character {
    constructor(private _n: string, private _sMoviment: string) {
        super();
    }
    talk(): void {
        console.log(`${this._n} is ranged and is talking.`);
    }
    specialMove(): void {
        console.log(`${this._n} used ${this._sMoviment}`);
    }
}

const yoshi = new MeleeCharacter('Yoshi', 'Super dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

// yoshi.talk();
// yoshi.specialMove();
// samus.talk();
// samus.specialMove();

Character.characterPresentation(yoshi);
Character.characterPresentation(samus);