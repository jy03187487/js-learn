const o = {
    a: 1,
    func: function () {
        console.log(this === o);
        const self = this;

        function inner() {
            console.log(this === undefined);
            console.log(self === o);
        }

        inner();
    }
}

o.func();

function A() {
    this.a = 1;
    this.b = 2;
    this.addAB = function () {
        console.log(`arguments length=${arguments.length}`)
        console.log(`arguments callee=${arguments.callee}`)
        return this.a + this.b;
    }
}

const a1 = new A;
a1.a = 5;
const a2 = new A;
console.log(a1.addAB(12345))
console.log(a2.addAB())

console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(a1))));

(function () {
    return () => console.log("Hello World!");
}())()

function outer() {
    const a = 1;
    function inner(b) {
        return a + b;
    }
    return inner;
}

console.log(outer()(1));
console.log(outer()(2));

//monkey-patching
const f = a1['addAB']
a1['addAB'] = function () {
    console.log("do something before");
    f();
    console.log("do something after");
}
a1.addAB();