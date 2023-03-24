class Superclass {
    isSuper: boolean;
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Hello, world!');

    }
}

class SubClass extends Superclass { }

const myFunc = (object: Superclass) => {
    object.sayHello();
}

const sup = new Superclass();
const sub = new SubClass();

myFunc(sup);
myFunc(sub);