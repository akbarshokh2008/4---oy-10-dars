// 1 - MASALA
// class Person {
//   constructor(ism, yosh, mamlakat) {
//     (this.ism = ism), (this.yosh = yosh), (this.mamlakat = mamlakat);
//   }
// }
// let person1 = new Person("Akbarjon", 16, "Uzbekistan");

// let person2 = new Person("Mosinov", 17, "Fergana");

// console.log(person1, person2);

// 2 - MASALA
// class Rectangle {
//   constructor(kenglik, balandlik) {
//     (this.kenglik = kenglik), (this.balandlik = balandlik);
//   }
//   yuzaMetod() {
//     return this.kenglik * this.balandlik;
//   }
//   perMetod() {
//     return 2 * (this.kenglik + this.balandlik);
//   }
// }

// const tortburchak = new Rectangle(5, 10);
// console.log("Yuzasi :", tortburchak.yuzaMetod());
// console.log("Perimetri :", tortburchak.perMetod());

// 3 - MASALA
// class Vehicle {
//   constructor(marka, model, yil) {
//     (this.marka = marka), (this.model = model), (this.yil = yil);
//   }
// }
// const avto = new Vehicle("AMG", "E200", 2020);

// class Avtomobil extends Vehicle {
//   constructor(marka, model, yil, eshiklar) {
//     super(marka, model, yil);
//     this.eshiklar = eshiklar;
//   }
// }

// const avtomobil = new Avtomobil("AMG", "E200", 2020, 4);

// console.log(avto);
// console.log(avtomobil);

// 6 - MASALA
// class Xodim {
//   constructor(ism, ishHaqi) {
//     this.ism = ism;
//     this.ishHaqi = ishHaqi;
//   }
//   ishMaoshi() {
//     return this.ishHaqi * 12;
//   }
// }
// class Menejer extends Xodim {
//   constructor(ism, ishHaqi, bonus) {
//     super(ism, ishHaqi);
//     this.bonus = bonus;
//   }
//   ishMaoshi() {
//     return (this.ishHaqi + this.bonus) * 12;
//   }
// }
// const xodim1 = new Xodim("akbarjon", 500);
// console.log(xodim1);

// const menejer1 = new Menejer("mosinov", 1000, 200);
// console.log(menejer1);

// 7 -MASALA
// class Kitob {
//   constructor(sarlavha, muallif, nashrYili, narx) {
//     this.sarlavha = sarlavha;
//     this.muallif = muallif;
//     this.nashrYili = nashrYili;
//     this.narx = narx;
//   }
// }
// class Ebook extends Kitob {
//   constructor(sarlavha, muallif, nashrYili, narx, format) {
//     super(sarlavha, muallif, nashrYili, narx);
//     this.format = format;
//   }
// }
// const kitob1 = new Kitob("o'qi", "akbarjon", 1960, 15);
// const ebook1 = new Ebook("o'qi", "akbarjon", 1949, 10, "PDF");

// console.log(kitob1);
// console.log(ebook1);

// 8 - MASALA
class Animal {
  constructor(tur, ovoz) {
    this.tur = tur;
    this.ovoz = ovoz;
  }
}
class It extends Animal {
  constructor(tur, ovoz, rang) {
    super(tur, ovoz);
    this.rang = rang;
  }
}
const hayvon1 = new Animal("ot", "kish");
const it1 = new It("It", "vov", "qora");

console.log(hayvon1, it1);
