import { of, exhaustMap, interval, take } from 'rxjs';

const timerCondition = of(1,2,3,4,5);
// Run a finite timer, only if there is no currently active timer
const result = timerCondition.pipe(
  exhaustMap(() => interval(1000).pipe(take(5)))
);
result.subscribe(x => console.log(x));