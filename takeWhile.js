import { from, takeWhile } from 'rxjs';

const source = from(['Green Arrow', 'SuperMan', 'Flash', 'SuperGirl', 'Black Canary', 'Batman'])
// Skip the heroes until SuperGirl
const example = source.pipe(takeWhile(hero => hero !== 'SuperGirl'));
// output: SuperGirl, Black Canary
example.subscribe(femaleHero => console.log(femaleHero));