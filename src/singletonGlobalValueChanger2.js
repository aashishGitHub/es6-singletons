import {singletonObject} from './singleton';
import {double} from './modifier2';

setInterval(() => {
    double(singletonObject);
    console.log(`I2.5: ${singletonObject.value}`);
} , 2500)