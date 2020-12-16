export class aliasStudy {
  static study() {
    // 타입 앨리어스는 새로운 타입을 정의한다.
    // 타입으로 사용할 수 있다는 점에서 타입 앨리어스는 인터페이스와 유사하다.

    // =====
    // 인터페이스는 아래와 같은 타입으로 사용할 수 있다.
    // =====
    interface Person {
      name: string;
      age?: number;
    }

    // 아래 내용과 동일하지는 않음
    // const person: Person;
    const person = {} as Person;

    person.name = 'Lee';
    person.age = 20;
    // person.address = 'Seoul'; // Error
    // =====

    // =====
    // 타입 앨리어스도 아래와 마찬가지로 타입으로 사용할 수 있다.
    // =====
    type Person2 = {
      name: string,
      age?: number
    }

    const person2 = {} as Person;
    person2.name = 'Lee';
    person2.age = 20;
    // person2.address = 'Seoul';
    // =====

    // =====
    // 타입 앨리어스는 원시값, 유니온 타입, 튜플 등도 타입으로 지정할 수 있다.
    // 하지만 타입 앨리어스는 인터페이스같이 구현(implements)나, 상속(extends)될 수 없기 때문에 확장이 필요한 경우 인터페이스가 유리하다.
    // 인터페이스로 표현할 수 없거나(유니온 또는 튜플)을 사용해야 된다면 타입 앨리어스를 사용하는 편이 유리하다.
    // =====
    type Str = 'Lee';

    type Union = string | null;

    type Name = 'Lee' | 'Kim';

    type Num = 1 | 2 | 3 | 4 | 5;

    type obj = { a: 1 } | { b: 2 };

    type Func = (() => string) | (() => void);

    // type Shape = Square | Rectangle | Circle;

    type Tuple = [string, boolean];
    // const t: Tuple = ['', '']; // Error
    // =====
  }
}
