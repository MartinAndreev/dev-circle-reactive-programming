import { interval, map } from 'rxjs';

const interval$ = interval(1000).pipe(map(v => v * 10));
const subscription = interval$.subscribe(x => console.log(x));

setTimeout(() => {
    subscription.unsubscribe();
}, 10000);
