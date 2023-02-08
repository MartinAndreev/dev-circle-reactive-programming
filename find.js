import { interval, find } from 'rxjs';

const interval$ = interval(1000).pipe(find(v => v > 3 && v % 2 === 0));
interval$.subscribe(x => console.log(x));
