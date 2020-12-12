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
    console.log(todo3);

    // =====

    // =====
    // =====
    // =====



  }
}
