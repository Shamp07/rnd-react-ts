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
    // =====
    // =====

  }
}
