interface Subject {
    doOperation() : void;
}

class RealSubject implements Subject {
    constructor() {}

    public doOperation() : void {
        console.log('我是RealSubject类，正在执行');
    }
}

class ProxyFactory {
    private target : any;
    constructor(target : any) {
        this.target = target;
    }

    public getProxyInstance() : any {
        return new Proxy(this.target);
    }
}

function main() {
    const target : Subject = new RealSubject();
    const proxyInstance : Subject = <Subject>new ProxyFactory(target).getProxyInstance();

    proxyInstance.doOperation();
}

main();