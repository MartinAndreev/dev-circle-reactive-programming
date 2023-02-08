import { interval, timer, skipUntil } from 'rxjs';

const source = interval(1000);
const timerCondition = timer(3000);
const result = source.pipe(skipUntil(timerCondition));
result.subscribe(x => console.log(x));