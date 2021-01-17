export class genericStudy {
  static study() {
    // Java 와 C# 같은 정적 타입의 언어의 경우, 함수 또는 클래스를 정의하는 시점에 매개변수나 반환값의 타입을 선언하여야 한다.
    // 함수 같은 경우는 당연히 정의 시점에 매개변수나 반환값의 타입을 지정하지만 클래스는 어떤 부분을 말하는 건지 이해가 안감.
    // Java 에 모르는 부분이 있거나 C#의 경우인 것 같으나, 추후 검토가 필요하다.
    // 여튼, 위와 같이 함수 또는 클래스를 정의하는 시점에 매개변수나 반환값의 타입을 선언하기 어려운 경우가 있다고 한다.

    // =====
    // 아래의 예제를 살펴보자 FIFO 의 특성을 가진 큐를 표현한 내용이다.
    // queue 의 data 프로퍼티 배열에는 어떤 타입이든 가질 수 있는 배열이다.
    // 하지만 두번째 값은 '1'이라는 문자열이 들어갔고, number 타입이 아니기 때문에 두번째 toFixed 에서 에러가 발생한다.
    // =====
    // class Queue {
    //   protected data: any[] = [];
    //
    //   push(item: any) {
    //
    //   }
    //
    //   pop() {
    //     return this.data.shift();
    //   }
    // }
    //
    // const queue = new Queue();

    // queue.push(0);
    // queue.push('1');
    //
    // console.log(queue.pop().toFixed());
    // console.log(queue.pop().toFixed()); // Error
    // =====

    // =====
    // 위와 같은 경우를 해결하기 위해 Queue 클래스를 상속하여 number 타입 전용 NumberQueue 클래스를 선언할 수 있다.
    // 아래의 예제 같은경우는 63라인의 부분에서 에러가 발생하기 때문에 사전에 에러를 방지할 수 있다.
    //
    // =====
    class Queue {
      protected data: any[] = [];

      push(item: any) {
        this.data.push(item);
      }

      pop() {
        return this.data.shift();
      }
    }

    class NumberQueue extends Queue {
      push(item: number) {
        super.push(item);
      }

      pop(): number {
        return super.pop();
      }
    }

    const queue = new NumberQueue();

    // queue.push('1'); // Error
    queue.push(+'1');

    console.log(queue.pop().toFixed()); // 0
    console.log(queue.pop().toFixed()); // 1
    // =====

    // =====
    // 제네릭을 사용한다면 이렇게 굳이 상속받지 않고, 클래스에서 제네릭타입을 정의한 후에 제네릭 타입을 토대로 클래스를 구현 할수 있다.
    // 제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.
    // 즉, 선언은 한번이되, 그 틀을 가지고 놀 수 있다는 것 이다.
    // 제네릭의 타입 이름은 자유지만 보통 관용적으로 사용되는 식별자로 타입 파라미터(Type parameter)라 한다. T는 Type 의 약자이다.
    // 또한 함수에도 이 제네릭을 사용할 수 있다 하니 아래 예제를 살펴보자.
    // =====
    class Queue2<T> {
      protected data: Array<T> = [];
      push (item: T) {
        this.data.push(item);
      }
      pop(): T | undefined {
        return this.data.shift();
      }
    }

    const numberQueue = new Queue2<number>();

    numberQueue.push(0);
    // numberQueue.push('1');
    numberQueue.push(+'1');

    console.log(numberQueue.pop()?.toFixed());
    console.log(numberQueue.pop()?.toFixed());
    console.log(numberQueue.pop()?.toFixed());

    const stringQueue = new Queue2<string>();

    stringQueue.push('Hello');
    stringQueue.push('world');

    console.log(stringQueue.pop()?.toUpperCase());
    console.log(stringQueue.pop()?.toUpperCase());
    // error
    console.log(stringQueue.pop()?.toUpperCase());

    // 커스텀 객체 전용 Queue
    const myQueue = new Queue2<{name: string, age: number}>();
    myQueue.push({name: 'Lee', age: 10});
    myQueue.push({name: 'Kim', age: 20});

    console.log(myQueue.pop());
    console.log(myQueue.pop());
    console.log(myQueue.pop());
    // =====


    // =====
    // 이렇게 Generic 을 이용하여 함수를 선언하면 하나의 타입만이 아닌 다양한 타입의 매개변수와 리턴값을 사용 할 수 있다.
    // reverse 함수는 인수의 타입에 의해 매개변수가 결정된다. Reverse 함수는 다양한 타입의 요소로 구성된 배열을 인자로 전달받는다.
    // 예를 들어 number 타입의 요소를 갖는 배열을 전달받으면 타입과 리턴 타입은 number[] 이 된다.

    // =====
    function reverse<T>(items: T[]): T[] {
      return items.reverse();
    }

    const arg = [1, 2, 3, 4, 5];
    // 인수에 의해 타입 매개변수가 결정된다.
    const reversed = reverse(arg);
    console.log(reversed); // [ 5, 4, 3, 2, 1 ]
    // =====


    // =====
    // 또한 {name: string} 타입의 요소를 갖는 배열을 전달받으면 타입 매개변수는 {name: string}가 된다.
    // =====
    function reverse2<T>(items: T[]): T[] {
      return items.reverse();
    }

    const arg2 = [{ name: 'Lee' }, { name: 'Kim' }];
    // 인수에 의해 타입 매개변수가 결정된다.
    const reversed2 = reverse2(arg);
    console.log(reversed2); // [ { name: 'Kim' }, { name: 'Lee' } ]
    // =====
  }
}
