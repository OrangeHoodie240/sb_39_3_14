import fruits from './foods.js'; 
import {choice, remove} from './helpers.js';

let randomFruit = choice(fruits); 
console.log(`I'd like one ${randomFruit}, please.`); 
console.log(`Here you go: ${randomFruit}`);
console.log("Delicous! May I have another?"); 
remove(fruits, randomFruit); 
console.log(`I'm sorry, we're all out. We have ${fruits.length} left`);  