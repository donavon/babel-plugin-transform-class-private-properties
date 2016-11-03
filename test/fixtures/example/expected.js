var __a = "should not be effected";

class example {
    constructor(noun) {
        this.__noun = noun;
    }

    someMethod() {
        return this.__privateMethod();
    }
}
