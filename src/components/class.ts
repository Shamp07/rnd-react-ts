export class classStudy {
  static study() {
    // TypeScript 의 Class 는 ES6의 Class 형태와 거의 동일하지만 몇 가지 TypeScript 만의 고유한 확장 기능이 있다.

    // =====
    // 기존 ES6의 클래스에서는 멤버변수를 클래스 자체에 선언할 수 없었고, 생성자에서 초기화 하여 생성해주어야 했다.
    // 하지만 TypeScript 의 클래스는 반대로, 클래스 자체에 무조건 사전 선언해야 한다.
    // 자바의 class 에 점점 비슷해지는 느낌이다.
    // =====
    class Person {
      name: string;

      constructor(name: string) {
        this.name = name;
      }

      walk() {
        console.log(`${this.name} 가 걷고 있습니다.`);
      }
    }
    const person = new Person('Bae JinYoung');
    person.walk();
    // =====

    // =====
    // 또한, TypeScript 에서는 class 에서 Java 와 동일하게 접근제한자를 사용할 수 있다.
    // (public, private, protected)
    // =====
  }
}