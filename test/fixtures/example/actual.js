var _a = "should not be effected";

class example {
    constructor(noun) {
        this._noun = noun;
    }

    _privateMethod() {
        return "Hello " + this._noun;
    }

    someMethod() {
        return this._privateMethod();
    }
}
