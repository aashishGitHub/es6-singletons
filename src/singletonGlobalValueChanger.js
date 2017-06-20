import {singletonObject} from './singleton';
import {double} from './modifier2';

setInterval(() => {
    double(singletonObject);
    console.log(`I5.0: ${singletonObject.value}`);
} , 5000)