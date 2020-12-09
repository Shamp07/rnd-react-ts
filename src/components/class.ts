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
    class Foo {
      public x: string;
      protected y: string;
      private z: string;

      constructor(x: string, y: string, z: string) {
        this.x = x;
        this.y = y;
        this.z = z;
      }
    }
    const foo = new Foo('X','Y', 'Z');

    // public 접근 제한자는 말그대로 어디서나 접근할 수 있다.
    console.log(foo.x);

    // protected 접근 제한자는 자신의 클래스바디나, 자신의 클래스를 상속받은 자식클래스에서만 접근할 수 있다.
    // console.log(foo.y);

    // private 접근 제한자는 자신의 클래스 바디 내에서만 접근할 수 있다.
    // console.log(foo.z);
    class Bar extends Foo {
      constructor(x: string, y: string, z: string) {
        super(x, y, z);

        console.log(this.x);
        console.log(this.y);
        // console.log(this.z);
      }
    }
    // =====

    // =====
    // TypeScript 에서는 생성자 함수 파라미터에 접근 제한자를 붙혀 선언할 수 있다.
    // 위의 경우, 암묵적으로 클래스의 프로퍼티로 선언된다.
    // 또한 생성자에서 초기화가 없어도 자동으로 초기화 처리 된다.
    // =====
    class Doo {
      // 접근 제한자가 선언된 생성자 파라미터 x는 클래스 프로퍼티로 선언되고 지동으로 초기화된다.
      // public 이 선언되었으므로 x는 클래스 외부에서도 참조가 가능하다.

      constructor(public x: string) {}

    }
    const doo = new Doo('Hello');
    console.log(doo);   // Doo { x: 'Hello' }
    console.log(doo.x); // Hello
  }
}