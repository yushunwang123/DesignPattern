// function Dog() {
//     this.name = "lili";
//     this.birthYear = 2015;
//     this.sex = "男";
//     this.presentYear = 2018;

//     this.getDiscription = () => {
//         return `狗狗叫${this.name},性别${this.sex},${this.presentYear}年${this.presentYear - this.birthYear}岁了`
//     }
// }

// const dog = new Dog();
// console.log(dog.getDiscription());// 狗狗叫lili,性别男,2018年3岁了
// dog.presentYear = 2020;// 修改了当前年份
// // const dog1 = Object.create(dog);// 狗狗叫lili,性别男,2020年5岁了
// const dog1 = {}
// Object.setPrototypeOf(dog1, dog);
// // console.log(dog1.getDiscription());
// console.log(Object.getPrototypeOf(dog1))
