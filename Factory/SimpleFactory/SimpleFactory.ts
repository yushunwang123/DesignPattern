// 抽象产品接口
interface Product{}

// 具体产品一
class ConcreteProduct1 implements Product {
    constructor(){}
}

// 具体产品二
class ConcreteProduct2 implements Product {
    constructor(){}
}

// 简单工厂
class SimpleFactory {
    public static createProduct(type : number) : Product {
        let product = null;
        if (type === 1) {
            product = new ConcreteProduct1();
        } else if ( type === 2) {
            product = new ConcreteProduct2();
        }

        return product;
    }
}

// 使用
let product = SimpleFactory.createProduct(1);
console.log(product);