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
    // person.walk();
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
    // console.log(foo.x);

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
    // 당연히 접근 제한자를 붙히지 않으면 일반적으로 평범한 함수 파라미터인 함수 내부 스코프에서만 사용할 수 있는 변수이다.
    // =====
    class Doo {
      // 접근 제한자가 선언된 생성자 파라미터 x는 클래스 프로퍼티로 선언되고 지동으로 초기화된다.
      // public 이 선언되었으므로 x는 클래스 외부에서도 참조가 가능하다.

      constructor(public x: string) {}

    }
    const doo = new Doo('Hello');
    // console.log(doo);   // Doo { x: 'Hello' }
    // console.log(doo.x); // Hello
    // =====

    // =====
    // readonly 라는 키워드를 사용하여 선언한 프로퍼티는 생성자 또는 선언과 함께 초기화를 제외하고는 값의 변경이 불가능하다.
    // 말그대로 읽기만 가능하고 값을 변경하지는 못하는 것이다.
    // const 키워드와 비슷한 느낌이긴 하지만 약간 다르다.
    // =====
    class Eoo {
      private readonly MAX_LEN: number = 5;
      private readonly MSG: string;

      constructor() {
        this.MSG = 'hello';
        this.MAX_LEN = 4;
      }

      log() {
        // this.MAX_LEN = 10;
        // this.MSG = 'Hi';

        console.log(`MAX_LEN: ${this.MAX_LEN}`);
        console.log(`MSG: ${this.MSG}`);
      }
    }
    //new Eoo().log();
    // =====

    // ES6의 경우: static 키워드는 말그대로 정적을 뜻한다.
    //  자바와 마찬가지로 객체 공통이다. 각각의 인터페이스 마다 존재하는 것이아니고 모든 객체 공통으로 사용된다.
    //  그리하여 인스턴스를 생성하여 해당 메소드를 호출하는게 아닌 클래스 자체에서 호출할 수 있다.
    //  자바같은 경우는, 인스턴스에서 호출하던 클래스 자체에서 호출하든 상관없었는데 (전자의 경우 warning 이 발생하긴 함)
    //  ES6는 인스턴스에서 static 메소드 자체를 호출하지 못함.
    //  또한 ES6는 static 키워드를 함수에 밖에 사용하지 못함.
    // TypeScript 의 경우:
    //  static 키워드를 클래스 프로퍼티 자체에다가 사용 가능하다는것만 다름.
    // =====

    // =====
    // class Woo {
    //   constructor(prop) {
    //     this.prop = prop;
    //   }
    //
    //   static staticMethod() {
    //     return 'staticMethod';
    //   }
    //
    //   prototypeMethod() {
    //     return this.prop;
    //   }
    // }
    // console.log(Woo.staticMethod());
    // const woo = new Woo(123);
    // console.log(woo.staticMethod());

    class Woo {
      static instanceCounter = 0;
      constructor() {
        Woo.instanceCounter++;
      }
    }
    const woo1 = new Woo();
    const woo2 = new Woo();

    // console.log(Woo.instanceCounter);
    //console.log(woo2.instanceCounter);
    // =====

    // =====
    // TypeScript 에서는 abstract 라는 키워드를 사용 가능한데, 한글로 직역하면 "추상"이다.
    // class 선언시 앞의 키워드로 사용되며, 추상클래스에서는 추상메소드를 사용할 수 있다.
    // 추상메소드란, 메소드 이름과 타입만이 선언된 메소드다.
    // 이 추상클래스는 바로 인스턴스를 생성할 수 없다.
    // 추상클래스는 상속을 하기 위한 "틀" 같은 존재이다. 반드시 다른 클래스에서 상속하여 사용해야 한다.
    // 추상클래스에 선언된 추상메소드는 반드시 추상클래스를 상속한 클래스에서 오버라이딩을 해주어야 한다.
    // 인터페이스는 추상메소드밖에 사용하지 못하는 반면, 추상클래스는 일반 메소드와 추상메소드 둘다 사용할 수 있다.
    // =====
    abstract class Animal {
      abstract makeSound(): void;

      move(): void {
        console.log('roaming the earth');
      }
    }
    // =====
    // new Animal();

    class Dog extends Animal {
      makeSound(): void {
        console.log('bowwow~');
      }
      move(): void {
        console.log('over-riding');
      }
    }

    const myDog = new Dog();
    myDog.makeSound();
    myDog.move();

  }
}