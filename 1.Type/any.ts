// any : 뭐든 할당될 수 있는 타입. Javascript처럼 작동하게 됨으로 최대한 사용을 지양해야한다.

let a : any;
let obj : any = {};

a = 4;
a = "asdf";

// 어떠한 프로퍼티 키와 값을 선언하여도 추가된다. -> Javescript 스럽게 작동된다.
obj.a = 4;
obj.b = "";