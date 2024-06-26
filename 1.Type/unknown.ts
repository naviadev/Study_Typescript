// unknown : any와 같이 모든 값을 사용할 수 있지만 타입을 검사해 정제하기 전까지는 사용할 수 없는 값이 된다.

let unknown : unknown = 30;
let bool = unknown === 30;

// let addResult = unknown + 3; -> unknown으로 선언되었기에 사용할 수 없는 상태. 
// 사용하기 위해선 정제하는 과정을 거쳐야한다. 

let addResult : number; 

if(typeof unknown === 'number'){
  addResult = unknown + 4;
}

// addResult => 34