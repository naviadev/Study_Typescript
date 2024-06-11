# tsconfig.json이란

tsconfig은 파일 최상단에 위치해야하며, 해당 config 내용을 통해 컴파일러를 세부적으로 설정할 수 있다.
 
즉 tsconfig은 타입스크립트를 자바스크립트로 변환하는 규칙을 정의해둔 파일이다.

새로 학습하고 적용할 때 마다 추가할 예정 

Last Update : 2024 / 06 / 11

```
{
    // TypeScript 컴파일러의 규칙을 정의한다.
    "compilerOptions": { 

        //컴파일하여 추출되는 결과물을 의미한다. 
        //대부분의 브라우저는 ES6를 지원하기에 일반적으로 ES6를 사용한다.
        "target": "es5", 
        
        //TSC가 코드를 컴파일할 대상의 모듈 시스템
        "module": "commonjs", 
        
        //각종 타입 체킹 동작을 모두 활성화하는 옵션
        "strict": true, 

        // 컴파일에 필요한 JavaScript 내장 라이브러리를 지정할 수 있다.
        "lib": ["es5", "es2015.promise", "dom"]
        "sourceMap": true
    },

    // 개별적으로 컴파일이 필요한 파일들을 정의해둔다.
    "files": ["./main.ts"],

    // 컴파일이 필요한 파일을 지정한다.
    "include": [ "./*.ts" ], 
    
    // 컴파일 대상으로 제외할 파일을 지정한다. 
    "exclude": [ "node_modules", "./test.ts" ], 
    
    // tsconfig을 상속하여 설정을 재사용할 수 있도록 하는 속성이다.
    "extends": "./test/baseConfig.json", 
    
    // 프로젝트 간의 의존 관계를 선언한다.
    "references": [ 
        { "path": "./server" }, 
        { "path": "./client" } 
    ], 
    
    // 추가된 타입을 정의할 수 있는 속성이다.
    "typeAcquisition": { 
        "enable": true,
        "include": ["jquery"], 
        "exclude": ["react"]
    }, 
        
    // watch 모드 옵션
    "watchOptions": { 
        "watchFile": "useFsEvents", 
        "watchDirectory": "useFsEvents", 
        "fallbackPolling": "dynamicPriority"
    }
}

```
