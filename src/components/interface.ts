export class interfaceStudy {
  static study() {
    // 인터페이스는 일반적으로 타입체크를 위해 사용되며 변수, 함수, 클래스에 사용할 수 있다.
    // ES6에서는 interface 자체가 존재하지 않지만 TypeScript 의 확장기능 중 하나이며, 프로퍼티 또는 추상메소드의 구현을 강제하여,
    // 일관성을 유지할 수 있다고 한다.
    // 추상클래스는 일반메소드와 추상메소드를 두가지 다 사용할 수 있지만, 인터페이스는 모든 메소드가 추상메소드이다.
    // 단 추상클래스와 다르게 abstract 키워드를 사용하지 않아도 암묵적으로 적용된다.

    // =====
    // 인터페이스는 변수의 타입으로 사용할 수 있다.
    // 타입으로 사용하면 지정한 인터페이스 내용에 준수하여야 한다. 이것은 새로운 타입을 지정하는 것과 유사하다.
    // =====
    interface Todo {
      id: number,
      content: string,
      completed: boolean,
    }

    let todo: Todo;
    todo = { id: 1, content: 'typescript', completed: false };
    // =====

    // =====
    // 아래와 같이 인터페이스를 이용하여 함수를 선언할때 함수 파라미터 타입을 지정할 수 있다.
    // 인터페이스를 준수하는 타입의 변수만 인자로 넘길 수 있으며 객체를 전달할 때 복잡한 매개변수 체크가 필요없어서 매우 유용하다고 한다.
    // =====
    interface Todo2 {
      id: number;
      content: string;
      completed: boolean;
    }

    let todos: Todo2[] = [];

    function addTodo2(todo: Todo2) {
      todos = [...todos, todo];
    }

    const newTodo: Todo2 = { id: 1, content: 'typescript', completed: false, };
    addTodo2(newTodo);
    //console.log(todos);
    // =====

    // =====
    // 인터페이스는 함수의 타입으로도 사용할 수 있다. 파라미터와 함수의 리턴타입을 정한다.
    // 함수도 지정한 인터페이스에 대한 내용을 준수해야 한다.
    // 추가: SquareFunc 한 함수 인터페이스내에 두 함수의 종류를 선언하는게 컴파일이 되는데..
    // 이것을 어떤식으로 사용해야 하는지 감이 안잡힌다..
    // =====
    interface SquareFunc {
      (str: string): string;
      (num: number): number;
    }

    // const squareFunc: SquareFunc = function(str :string) {
    //   return str;
    // }

    //console.log(squareFunc(10));
    // =====

    // =====
    // 자바와 동일하게 interface 는 일반적인 클래스에 implements(구현) 키워드를 사용하여 사용할 수 있고,
    // 말 그대로 인터페이스에 있는 모든 부분들을 직접 implements 클래스내에서 구현해주어야 한다.
    // 인터페이스도 추상클래스와 같이 바로 인스턴스를 생성할 수 없기때문에 인스턴스를 생성하고 싶은 경우는
    // 아래 예제와 같이 클래스에 구현을 사용하여 해당 구현한 클래스로 객체를 생성한다.
    // (참고로 아래와 같이 생성자에 접근제한자를 사용하면 자동으로 클래스 바디에 내부적으로 프로퍼티가 구현되기 때문에 문제없음.)
    // =====
    interface ITodo {
      id: number;
      content: string;
      completed: boolean;
    }

    class TodoImpl implements ITodo {
      constructor(
        public id: number,
        public content: string,
        public completed: boolean
      ) { }
    }

    const todo3 = new TodoImpl(1, 'TypeScript', false);
    // console.log(todo3);

    // =====
    // 아래와 같이 추상메소드가 인터페이스에 정의되어 있는 경우도 예외 없이
    // 인터페이스를 구현한 클래스에서 메소드를 구현해주어야 한다.
    // =====
    interface IPerson {
      name: string;
      sayHello(): void;
    }

    class Person implements IPerson {
      constructor(public name: string) {}

      sayHello() {
        console.log(`Hello ${this.name}`);
      }
    }

    function greeter(person: IPerson): void {
      person.sayHello();
    }

    const me = new Person('Lee');
    // greeter(me);
    // =====

    // =====
    // 아래의 예제에서 makeNoise 의 함수를 보면 IDuck 인터페이스의 타입 형태를 파라미터로 받는데,
    // 아래와 같은 예제에서 RedheadDuck 클래스는 IDuck 인터페이스를 구현하지 않았는데도 오류가 발생하지 않는다.
    // 실제로 interface 가 가지고 있는 추상메소드나 프로퍼티와 이름이 같은 메소드와 프로퍼티가 존재한다면, 해당 인터페이스를 구현하지 않아도
    // 인터페이스를 구현한것으로 친다는것이다. 이것을 덕 타이핑또는 구조적 타이핑이라고 한다.
    // -- 이것을 어디다 쓸지는 감이 안잡힌다...
    // =====
    interface IDuck {
      quack(): void;
    }

    class MallardDuck implements IDuck {
      quack() {
        console.log('Quack!');
      }
    }

    class RedheadDuck {
      quack() {
        console.log('qu~ack!');
      }
    }

    function makeNoise(duck: IDuck): void {
      duck.quack();
    }

    // makeNoise(new MallardDuck());
    // makeNoise(new RedheadDuck());
    // =====

    // =====
    // 추가로 메소드가 아닌 프로퍼티의 경우에도 마찬가지이다.
    // name 이외에 다른 프로퍼티가 있어도, IPerson2가 가지고 있는 프로퍼티나 추상메소드를
    // 모두 구현하기만 한다면 부합한다.
    // =====
    interface IPerson2 {
      name: string;
    }

    function sayHello(person: IPerson2): void {
      console.log(`Hello ${person.name}`);
    }

    const me2 = { name: 'Lee', age: 18 };
    sayHello(me2);
    // =====

    // =====
    // interface 는 자바스크립트의 표준이 아닌 단순 개발단계의 도움을 위해 제공되는 기능이다.
    // 그리하여 위의 예제를 일반 자바스크립트로 트랜스파일링을 하면 인터페이스 자체가 소스상에서 사라진다.
    // =====
    // function sayHello(person) {
    //   console.log("Hello" + person.name);
    // }
    // var me = { name: 'Lee', age: 18 };
    // sayHello(me);
    // =====


  }
}
