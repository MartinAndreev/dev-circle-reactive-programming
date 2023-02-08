import { concatMap, interval, take, of, switchMap } from 'rxjs';
 
const clicks = of(1, 2, 3);
const result = clicks.pipe(
  switchMap(ev => {
    console.log(`Current value ${ev}`);

    return interval(1000).pipe(take(4));
  })
);

const subscription = result.subscribe(x => console.log(x));