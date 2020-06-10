interface Subject {
    doOperation() : void;
}

class RealSubject implements Subject {
    public doOperation() {
        console.log('我是RealSubject类，正在执行');
    }
}

class MyProxy implements Subject {
    private target : Subject;
    constructor(realSubject : Subject) {
        this.target = realSubject;
    }

    public doOperation() {
        console.log('我是代理类');
        this.target.doOperation();
    }
}

function main() {
    const realSubject : Subject = new RealSubject();
    const myProxy : Subject = new MyProxy(realSubject);

    myProxy.doOperation();
}

main();