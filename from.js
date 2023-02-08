import { from, take } from 'rxjs';
 
function* generateDoubles(seed) {
   let i = seed;
   while (true) {
     yield i;
     i = 2 * i; // double it
   }
}
 
const iterator = generateDoubles(3);
const result = from(iterator).pipe(take(10));
 
const subscription = result.subscribe(x => console.log(x));

