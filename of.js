import { of } from 'rxjs';
 
const subscription = of(10, 20, 30)
  .subscribe({
    next: value => console.log('next:', value),
    error: err => console.log('error:', err),
    complete: () => console.log('the end'),
  });