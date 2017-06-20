import {singletonObject} from './singleton';
import {increment} from './modifier1';
import {double} from './modifier2';
// import {singletonConst} from './singletonConst';
// import defaultSingletonObject from './defaultSingletonObject';
import './singletonGlobalValueChanger';
import './singletonGlobalValueChanger2';

console.log("\nSingleton class instance (non-default):");
console.log(singletonObject.value); // 0
increment(singletonObject, 10); // 10
double(singletonObject); // 20
console.log(`index ${singletonObject.value}`); // 20

// console.log("\nSingleton const (non-default):");
// console.log(singletonConst.value);
// increment(singletonConst, 10);
// console.log(singletonConst.value);
// double(singletonConst);
// console.log(singletonConst.value);

// console.log("\nSingleton object (default):");
// console.log(defaultSingletonObject.value);
// increment(defaultSingletonObject, 10);
// console.log(defaultSingletonObject.value);
// double(defaultSingletonObject);
// console.log(defaultSingletonObject.value);